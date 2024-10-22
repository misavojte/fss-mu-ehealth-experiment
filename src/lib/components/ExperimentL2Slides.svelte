<script lang="ts">
	import type { IDoctorManager, IDoctorObjectL2 } from '$lib/interfaces/IDoctor';
	import { fade } from 'svelte/transition';
	import ExperimentL2Slide from './ExperimentL2Slide.svelte';
	import { writable } from 'svelte/store';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { getCancellableAsync, waitForConditionCancellable } from '$lib/utils/waitForCondition';
	import { DoctorManagerMock } from '$lib/services/DoctorManagerMock';

	export let slideBackgroundColor: string = '#0097b2';
	export let primaryColor: string = '#0097b2';
	export let doctors: IDoctorObjectL2[];
	export let doctorManager: IDoctorManager = new DoctorManagerMock();

	const dispatch = createEventDispatcher();

	let timerStart: number = 0;
	let timerEnd: number = 0;

	const stateDoctorWasClicked = writable<false | string>(false);
	const stateActiveDoctor = writable<IDoctorObjectL2 | null>(null);
	const abortController = new AbortController();
	const logic = async () => {
		for await (const doctor of doctors) {
			stateActiveDoctor.set(doctor);
			doctorManager.logL2Start(doctor.nr);
			timerStart = Date.now();
			await waitForConditionCancellable(stateDoctorWasClicked, 0, abortController.signal);
			timerEnd = Date.now();
			const timeElapsed = timerEnd - timerStart;
			doctorManager.logL2Response(doctor.nr, Number($stateDoctorWasClicked as string), timeElapsed);
			stateDoctorWasClicked.set(false);
			stateActiveDoctor.set(null);
		}
		dispatch('finish');
	};

	onMount(() => {
		getCancellableAsync(logic, abortController.signal);
	});

	onDestroy(() => {
		abortController.abort('ExperimentL2Slides was destroyed');
	});

	const handleFinish = (event: CustomEvent<string>) => {
		stateDoctorWasClicked.set(event.detail);
	};
</script>

<div class="relative w-screen h-screen" style="background: {slideBackgroundColor};">
	{#if $stateActiveDoctor}
		{@const reviews = $stateActiveDoctor.reviews.map((review) => ({
			title: review.reviewer_nick,
			rating: Number(review.star_statement),
			review: review.statement,
			id: review.nr + '_' + $stateActiveDoctor.nr
		}))}
		<div
			class="absolute w-screen h-screen flex items-center justify-center"
			in:fade={{ duration: 200, delay: 400 }}
			out:fade={{ duration: 200 }}
		>
			<ExperimentL2Slide
				id={$stateActiveDoctor.nr}
				name={$stateActiveDoctor.doctor_name}
				rating={Number($stateActiveDoctor.star_doc)}
				reviewCount={Number($stateActiveDoctor.rev_nr)}
				{reviews}
				{primaryColor}
				on:finish={handleFinish}
			/>
		</div>
	{/if}
</div>
