<script lang="ts">
	import ExperimentSlides from './ExperimentSlides.svelte';
	import InstructionStart from './InstructionStart.svelte';
	import InstructionIntermezzo from './InstructionIntermezzo.svelte';
	import InstructionEnd from './InstructionEnd.svelte';
	import LayoutLoader from './LayoutLoader.svelte';
	import { DoctorManagerBase } from '$lib/services/DoctorManagerBase';
	import { fade } from 'svelte/transition';
	import { preloadMedia } from '$lib/utils/preloadMedia';

	export let state: 'start' | 'practice' | 'intermezzo' | 'experiment' | 'end' | 'loading' =
		'start';

	export let pictureBase: string;

	const doctorManager = new DoctorManagerBase();

	const handlePostStart = async () => {
		state = 'loading';
		// preloadMedia is a function that preloads images
		const practiceDoctorsImages = doctorManager.getDoctorObjectForPractice().map((doctor) => {
			return {
				src: pictureBase + '/' + doctor.pict_id + '.png',
				type: 'img' as const
			};
		});
		await preloadMedia(practiceDoctorsImages, 100);
		state = 'practice';
	};

	const handlePostIntermezzo = async () => {
		state = 'loading';
		const trialDoctorsImages = doctorManager.getDoctorObjectForTrial().map((doctor) => {
			return {
				src: pictureBase + '/' + doctor.pict_id + '.png',
				type: 'img' as const
			};
		});
		await preloadMedia(trialDoctorsImages, 100);
		state = 'experiment';
	};
</script>

<main class="w-screen h-screen relative">
	{#if state === 'start'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<InstructionStart on:next={handlePostStart} />
		</div>
	{:else if state === 'practice'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<ExperimentSlides
				{pictureBase}
				doctors={doctorManager.getDoctorObjectForPractice()}
				on:experimentEnded={() => {
					state = 'intermezzo';
				}}
			/>
		</div>
	{:else if state === 'intermezzo'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<InstructionIntermezzo on:next={handlePostIntermezzo} />
		</div>
	{:else if state === 'experiment'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<ExperimentSlides
				{pictureBase}
				doctors={doctorManager.getDoctorObjectForTrial()}
				on:experimentEnded={() => {
					state = 'end';
				}}
			/>
		</div>
	{:else if state === 'end'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<InstructionEnd />
		</div>
	{:else if state === 'loading'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<LayoutLoader />
		</div>
	{/if}
</main>
