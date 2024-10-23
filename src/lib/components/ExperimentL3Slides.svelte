<script lang="ts">
	import type { IDoctorManager, IDoctorObjectL2 } from '$lib/interfaces/IDoctor';
	import { getCancellableAsync, waitForConditionCancellable } from '$lib/utils/waitForCondition';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import ExperimentL3Slide from './ExperimentL3Slide.svelte';
	import { DoctorManagerMock } from '$lib/services/DoctorManagerMock';
	import type { IGazeSaver } from '$lib/interfaces/IGazeSaver';

	export let slideBackgroundColor: string = '#0097b2';
	export let primaryColor: string = '#0097b2';
	export let doctorsGood: IDoctorObjectL2[];
	export let doctorsBad: IDoctorObjectL2[];
	export let doctorManager: IDoctorManager = new DoctorManagerMock();

	export let gazeSaver: IGazeSaver;

	const dispatch = createEventDispatcher();
	const wasCurrentDoctorFinished = writable(false);

	const abortController = new AbortController();
	const logic = async () => {
		doctorManager.logL3Init([...doctorsGood, ...doctorsBad]);
		for await (const doctor of doctorsGood) {
			activeDoctor.set(doctor);
			doctorManager.logL3Start(doctor.nr);
			await waitForConditionCancellable(wasCurrentDoctorFinished, 0, abortController.signal);
			wasCurrentDoctorFinished.set(false);
			activeDoctor.set(null);
			doctorManager.logL3End(doctor.nr);
		}
		currentType = 'bad';
		for await (const doctor of doctorsBad) {
			activeDoctor.set(doctor);
			doctorManager.logL3Start(doctor.nr);
			await waitForConditionCancellable(wasCurrentDoctorFinished, 0, abortController.signal);
			wasCurrentDoctorFinished.set(false);
			activeDoctor.set(null);
			doctorManager.logL3End(doctor.nr);
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
	let currentType: 'good' | 'bad' = 'good';
</script>

<div class="relative w-screen h-screen" style="background: {slideBackgroundColor};">
	{#each [...doctorsGood, ...doctorsBad] as doctor}
		{#if $activeDoctor && $activeDoctor.nr === doctor.nr}
			<div
				class="absolute w-screen h-screen flex items-center justify-center"
				in:fade={{ duration: 200, delay: 200 }}
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
					type={currentType}
					on:finish={handleFinish}
				/>
			</div>
		{/if}
	{/each}
</div>
