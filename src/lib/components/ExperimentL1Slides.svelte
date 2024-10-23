<script lang="ts">
	import type { IDoctorManager, IDoctorObjectL1 } from '$lib/interfaces/IDoctor';
	import ExperimentSlide from './ExperimentL1Slide.svelte';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { DoctorManagerMock } from '$lib/services/DoctorManagerMock';
	import { writable } from 'svelte/store';
	import { getCancellableAsync, waitForConditionCancellable } from '$lib/utils/waitForCondition';

	export let slideBackgroundColor: string = '#0097b2';

	export let starBackgroundColor: string = '#fff';

	export let starFillColor: string = '#0097b2';

	export let starOutlineColor: string = '#0097b2';

	export let starOutlineWidth: string = '1px';

	/**
	 * Base path for the image. Will differ for a storybook and the runtime
	 */
	export let pictureBase: string;

	export let picureExtension: string = 'png';

	/**
	 * In case the picture is not in the correct scale, systemic correction in percentages can be applied.
	 */
	export let pictureCorrection: number = 0.15;

	export let doctors: IDoctorObjectL1[];

	export let doctorManager: IDoctorManager = new DoctorManagerMock();

	const dispatch = createEventDispatcher();

	let timerStart: number = 0;
	let timerEnd: number = 0;

	const stateDoctorWasClicked = writable<false | string>(false);
	const stateDoctorWasLoaded = writable(false);
	const stateDoctorLikerVisible = writable(false);
	const stateActiveDoctor = writable<IDoctorObjectL1 | null>(null);
	const abortController = new AbortController();
	const logic = async () => {
		doctorManager.logL1Init(doctors);
		for await (const doctor of doctors) {
			stateActiveDoctor.set(doctor);
			doctorManager.logL1Start(doctor.pict_id);
			await waitForConditionCancellable(stateDoctorWasLoaded, 0, abortController.signal);
			doctorManager.logL1Load(doctor.pict_id);
			await waitForConditionCancellable(stateDoctorLikerVisible, 0, abortController.signal);
			timerStart = Date.now();
			doctorManager.logL1ShowLikert(doctor.pict_id);
			await waitForConditionCancellable(stateDoctorWasClicked, 0, abortController.signal);
			timerEnd = Date.now();
			const timeElapsed = timerEnd - timerStart;
			doctorManager.logL1Response(
				doctor.pict_id,
				Number($stateDoctorWasClicked as string),
				timeElapsed
			);
			stateDoctorWasClicked.set(false);
			stateDoctorWasLoaded.set(false);
			stateActiveDoctor.set(null);
		}
		dispatch('finish');
	};

	onMount(() => {
		getCancellableAsync(logic, abortController.signal);
	});

	onDestroy(() => {
		abortController.abort('ExperimentL1Slides was destroyed');
	});

	const handleInput = (event: CustomEvent<string>) => {
		stateDoctorWasClicked.set(event.detail);
	};

	const handleLikertVisible = () => {
		stateDoctorLikerVisible.set(true);
	};

	const handleLoad = () => {
		stateDoctorWasLoaded.set(true);
	};
</script>

<div class="relative w-screen h-screen" style="background: {slideBackgroundColor};">
	{#each doctors as doctor}
		{#if $stateActiveDoctor && $stateActiveDoctor.pict_id === doctor.pict_id}
			<div
				class="absolute w-screen h-screen flex items-center justify-center"
				in:fade={{ duration: 200, delay: 200 }}
				out:fade={{ duration: 200 }}
			>
				<ExperimentSlide
					pictureId={$stateActiveDoctor.pict_id}
					numberOfFiveStars={$stateActiveDoctor.star_5}
					numberOfFourStars={$stateActiveDoctor.star_4}
					numberOfThreeStars={$stateActiveDoctor.star_3}
					numberOfTwoStars={$stateActiveDoctor.star_2}
					numberOfOneStars={$stateActiveDoctor.star_1}
					doctorAvgRating={$stateActiveDoctor.stars_avg}
					doctorName={$stateActiveDoctor.doctor_name}
					{pictureBase}
					{pictureCorrection}
					{picureExtension}
					{starBackgroundColor}
					{starFillColor}
					{starOutlineColor}
					{starOutlineWidth}
					on:load={handleLoad}
					on:input={handleInput}
					on:likertVisible={handleLikertVisible}
				/>
			</div>
		{/if}
	{/each}
</div>
