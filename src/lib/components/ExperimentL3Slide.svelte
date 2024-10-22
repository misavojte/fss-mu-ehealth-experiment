<script lang="ts">
	import { getCancellableAsync, waitForConditionCancellable } from '$lib/utils/waitForCondition';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import LayoutCardAbsolute from './LayoutCardAbsolute.svelte';
	import { writable } from 'svelte/store';
	import ExperimentL2Doctor from './ExperimentL2Doctor.svelte';
	import LL from '../../i18n/i18n-svelte';

	export let id: string;
	export let name: string;
	export let rating: number;
	export let reviewCount: number;
	export let primaryColor: string = '#0097b2';
	export let reviews: Array<{ id: string; title: string; rating: number; review: string }>;
	export let type: 'good' | 'bad' = 'good';

	export let heightOfDoctor = 500;
	export let heightOfInstruction = 150;
	export let heightOfButton = 60;
	export let gapHeight = 20;
	export let width = 720;

	const dispatch = createEventDispatcher();
	const wasDoctorClicked = writable(false);
	const abortController = new AbortController();
	const logic = async () => {
		await waitForConditionCancellable(wasDoctorClicked, 0, abortController.signal);
		dispatch('finish');
	};

	onMount(() => {
		getCancellableAsync(logic, abortController.signal);
	});

	onDestroy(() => {
		abortController.abort('ExperimentL3Slide was destroyed');
	});

	const handleNext = () => {
		dispatch('finish');
	};
</script>

<div
	class="relative"
	style="height: {heightOfDoctor +
		heightOfInstruction +
		heightOfButton +
		2 * gapHeight}px; width: {width}px;"
>
	<LayoutCardAbsolute {width} height={heightOfInstruction} top={0} left={0}>
		<div class="flex items-center justify-center h-full p-2">
			<p class="text-lg text-gray-700">
				{#if type === 'good'}
					{$LL.l3Instructions.good()}
				{:else}
					{$LL.l3Instructions.bad()}
				{/if}
			</p>
		</div>
	</LayoutCardAbsolute>
	<LayoutCardAbsolute
		{width}
		height={heightOfDoctor}
		top={heightOfInstruction + gapHeight}
		left={0}
	>
		<ExperimentL2Doctor {id} {name} {rating} {reviewCount} {primaryColor} {reviews} />
	</LayoutCardAbsolute>
	<button
		class="rounded-xl absolute bg-blue-500 text-white hover:bg-blue-700"
		on:click={handleNext}
		style="width: {width}px; height: {heightOfButton}px; bottom: 0;"
	>
		{$LL.l3Instructions.button()}
	</button>
</div>
