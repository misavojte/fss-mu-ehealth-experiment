<script lang="ts">
	import {
		getCancellableAsync,
		waitForConditionCancellable,
		waitForTimeoutCancellable
	} from '$lib/utils/waitForCondition';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import ExperimentDoctor from './ExperimentL1Doctor.svelte';
	import ExperimentLikertScale from './ExperimentLikertScale.svelte';
	import LayoutCardAbsolute from './LayoutCardAbsolute.svelte';
	import { fly } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import Intersecter from './Intersecter.svelte';

	export let starBackgroundColor: string = '#fff';

	export let starFillColor: string = '#0097b2';

	export let starOutlineColor: string = '#0097b2';

	export let starOutlineWidth: string = '1px';

	export let pictureId: string;

	/**
	 * Base path for the image. Will differ for a storybook and the runtime
	 */
	export let pictureBase: string;

	export let picureExtension: string = 'png';

	/**
	 * In case the picture is not in the correct scale, systemic correction in percentages can be applied.
	 */
	export let pictureCorrection: number = 0.15;

	export let numberOfOneStars: number = 0;
	export let numberOfTwoStars: number = 0;
	export let numberOfThreeStars: number = 0;
	export let numberOfFourStars: number = 22;
	export let numberOfFiveStars: number = 48;

	export let doctorAvgRating: number = 4.3;
	export let doctorName: string = 'MUDr. Eva Malá';

	export let timeoutBeforeLikert: number = 5000;

	export let width: number = 720;

	export let heightOfDoctor: number = 420;
	export let heightOfLikert: number = 280;
	export let gapHeight: number = 30;

	let isLikertVisible = false;

	const isLoaded = writable(false);
	const handleLoad = () => {
		isLoaded.set(true);
	};

	const dispatch = createEventDispatcher();

	let abortController = new AbortController();
	const logic = async () => {
		await waitForConditionCancellable(isLoaded, 0, abortController.signal);
		dispatch('load');
		await waitForTimeoutCancellable(timeoutBeforeLikert, abortController.signal);
		dispatch('likertVisible');
		isLikertVisible = true;
	};

	onMount(() => {
		getCancellableAsync(logic, abortController.signal);
	});

	onDestroy(() => {
		abortController.abort('Aborted');
	});
</script>

<div
	class="relative {isLoaded
		? 'opacity-100'
		: 'opacity-0 select-none pointer-events-none'} transition-opacity duration-200"
	style="height: {heightOfDoctor + heightOfLikert + gapHeight}px; width: {width}px;"
>
	<LayoutCardAbsolute {width} height={heightOfDoctor} top={0} left={0}>
		<ExperimentDoctor
			{pictureId}
			{pictureBase}
			{pictureCorrection}
			{picureExtension}
			{numberOfOneStars}
			{numberOfTwoStars}
			{numberOfThreeStars}
			{numberOfFourStars}
			{numberOfFiveStars}
			{doctorAvgRating}
			{doctorName}
			{starBackgroundColor}
			{starFillColor}
			{starOutlineColor}
			{starOutlineWidth}
			on:load={handleLoad}
		/>
	</LayoutCardAbsolute>
	{#if isLikertVisible}
		<div in:fly={{ duration: 200, y: 50 }}>
			<Intersecter id="doctor-l1_{pictureId}likert">
				<LayoutCardAbsolute
					{width}
					height={heightOfLikert}
					top={heightOfDoctor + gapHeight}
					left={0}
				>
					<ExperimentLikertScale on:input />
				</LayoutCardAbsolute>
			</Intersecter>
		</div>
	{/if}
</div>
