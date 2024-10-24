<script lang="ts">
	import { getCancellableAsync, waitForConditionCancellable } from '$lib/utils/waitForCondition';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import ExperimentLikertScale from './ExperimentLikertScale.svelte';
	import LayoutCardAbsolute from './LayoutCardAbsolute.svelte';
	import { writable } from 'svelte/store';
	import ExperimentL2Doctor from './ExperimentL2Doctor.svelte';
	import Intersecter from './Intersecter.svelte';

	export let id: string;
	export let name: string;
	export let rating: number;
	export let reviewCount: number;
	export let primaryColor: string = '#0097b2';
	export let reviews: Array<{ id: string; title: string; rating: number; review: string }>;

	export let heightOfDoctor = 620;
	export let heightOfLikert = 280;
	export let gapHeight = 20;
	export let width = 720;

	const dispatch = createEventDispatcher();
	const wasDoctorClicked = writable<string | false>(false);
	const abortController = new AbortController();
	const logic = async () => {
		await waitForConditionCancellable(wasDoctorClicked, 0, abortController.signal);
		dispatch('finish', $wasDoctorClicked as string);
	};

	onMount(() => {
		getCancellableAsync(logic, abortController.signal);
	});

	onDestroy(() => {
		abortController.abort('ExperimentL2Slide was destroyed');
	});

	const handleLikertInput = (event: CustomEvent<string>) => {
		wasDoctorClicked.set(event.detail);
	};
</script>

<div
	class="relative"
	style="height: {heightOfDoctor + heightOfLikert + gapHeight}px; width: {width}px;"
>
	<LayoutCardAbsolute {width} height={heightOfDoctor} top={0} left={0}>
		<ExperimentL2Doctor {id} {name} {rating} {reviewCount} {primaryColor} {reviews} />
	</LayoutCardAbsolute>
	<LayoutCardAbsolute {width} height={heightOfLikert} top={heightOfDoctor + gapHeight} left={0}>
		<Intersecter id="doctor-l2_{id}_likert">
			<ExperimentLikertScale on:input={handleLikertInput} />
		</Intersecter>
	</LayoutCardAbsolute>
</div>
