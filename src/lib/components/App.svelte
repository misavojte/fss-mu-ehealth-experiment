<script lang="ts">
	import ExperimentSlides from './ExperimentL1Slides.svelte';
	import InstructionIntermezzo from './InstructionIntermezzo.svelte';
	import InstructionEnd from './InstructionEnd.svelte';
	import { fade } from 'svelte/transition';
	import AppQuestion from './AppQuestion.svelte';
	import type { ITimestampQuestionService } from '$lib/interfaces/IQuestion';
	import AppConnect from './AppConnect.svelte';
	import { GazeManager } from '@473783/develex-core';
	import type { IConnectLogger } from '$lib/interfaces/IConnectLogger';
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import type { IGazeSaver } from '$lib/interfaces/IGazeSaver';
	import { onDestroy, onMount, setContext } from 'svelte';
	import type { AcceptedIntersect } from '$lib/database/repositories/Gaze.repository';

	export let state: 'connect' | 'start' | 'practice' | 'intermezzo' | 'experiment' | 'end' =
		'connect';

	export let pictureBase: string;

	export let questionsService: ITimestampQuestionService;
	export let connectLogger: IConnectLogger;
	export let doctorManager: IDoctorManager;
	export let gazeSaver: IGazeSaver;

	const gazeManager = new GazeManager();

	const handlePostStart = async () => {
		state = 'practice';
	};

	const handlePostIntermezzo = async () => {
		state = 'experiment';
	};

	const handlePostConnect = async () => {
		state = 'start';
	};

	const onIntersect = (entry: AcceptedIntersect) => {
		gazeSaver.saveGazeInteraction(entry);
	};

	setContext('gazeManager', gazeManager);

	onMount(() => {
		gazeManager.on('intersect', onIntersect);
	});

	onDestroy(() => {
		gazeManager.off('intersect', onIntersect);
	});
</script>

<main class="w-screen h-screen relative">
	{#if state === 'connect'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppConnect {connectLogger} {gazeManager} on:finished={handlePostConnect} />
		</div>
	{:else if state === 'start'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppQuestion {questionsService} on:finished={handlePostStart} />
		</div>
	{:else if state === 'practice'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<ExperimentSlides
				{pictureBase}
				doctors={doctorManager.getL1ObjectForPractice()}
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
				doctors={doctorManager.getL1ObjectForTrial()}
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
	{/if}
</main>
