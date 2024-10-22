<script lang="ts">
	import type { IDoctorObjectL2 } from '$lib/interfaces/IDoctor';
	import { getCancellableAsync, waitForConditionCancellable } from '$lib/utils/waitForCondition';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import ExperimentL3Slide from './ExperimentL3Slide.svelte';

	export let slideBackgroundColor: string = '#0097b2';
	export let primaryColor: string = '#0097b2';
	export let doctorsGood: IDoctorObjectL2[];
	export let doctorsBad: IDoctorObjectL2[];

	const dispatch = createEventDispatcher();
	const wasCurrentDoctorFinished = writable(false);

	const abortController = new AbortController();
	const logic = async () => {
		for await (const doctor of doctorsGood) {
			activeDoctor.set(doctor);
			await waitForConditionCancellable(wasCurrentDoctorFinished, 0, abortController.signal);
			wasCurrentDoctorFinished.set(false);
		}
		for await (const doctor of doctorsBad) {
			activeDoctor.set(doctor);
			await waitForConditionCancellable(wasCurrentDoctorFinished, 0, abortController.signal);
			wasCurrentDoctorFinished.set(false);
		}
		dispatch('finish');
	};

	onMount(() => {
		getCancellableAsync(logic, abortController.signal);
	});

	onDestroy(() => {
		abortController.abort('ExperimentL3Slides was destroyed');
	});

	const handleFinish = () => {
		wasCurrentDoctorFinished.set(true);
	};

	let activeDoctor: Writable<IDoctorObjectL2 | null> = writable(null);
</script>

<div class="relative w-screen h-screen" style="background: {slideBackgroundColor};">
	{#if $activeDoctor !== null}
		<div
			class="absolute w-screen h-screen flex items-center justify-center"
			in:fade={{ duration: 200, delay: 400 }}
			out:fade={{ duration: 200 }}
		>
			<ExperimentL3Slide
				id={$activeDoctor.nr}
				name={$activeDoctor.doctor_name}
				rating={Number($activeDoctor.star_doc)}
				reviewCount={Number($activeDoctor.rev_nr)}
				reviews={$activeDoctor.reviews.map((review) => ({
					title: review.reviewer_nick,
					rating: Number(review.star_statement),
					review: review.statement,
					id: review.nr + '_' + $activeDoctor.nr
				}))}
				{primaryColor}
				on:finish={handleFinish}
			/>
		</div>
	{/if}
</div>
