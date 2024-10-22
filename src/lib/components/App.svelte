<script lang="ts">
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
	import ExperimentL1Slides from './ExperimentL1Slides.svelte';

	export let state: 'connect' | 'start' | 'practicel1' | 'intermezzol1' | 'triall1' | 'end' =
		'connect';

	export let pictureBase: string;

	export let questionsService: ITimestampQuestionService;
	export let connectLogger: IConnectLogger;
	export let doctorManager: IDoctorManager;
	export let gazeSaver: IGazeSaver;

	const gazeManager = new GazeManager();

	const handlePostStart = async () => {
		state = 'practicel1';
	};

	const handlePostIntermezzo = async () => {
		state = 'triall1';
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
	{:else if state === 'practicel1'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<ExperimentL1Slides
				{pictureBase}
				doctors={doctorManager.getL1ObjectForPractice()}
				on:finish={() => {
					state = 'intermezzol1';
				}}
			/>
		</div>
	{:else if state === 'intermezzol1'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<InstructionIntermezzo on:next={handlePostIntermezzo} />
		</div>
	{:else if state === 'triall1'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<ExperimentL1Slides
				{pictureBase}
				doctors={doctorManager.getL1ObjectForTrial()}
				on:finish={() => {
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
