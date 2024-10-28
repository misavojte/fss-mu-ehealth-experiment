<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { ITimestampQuestionService } from '$lib/interfaces/IQuestion';
	import AppConnect from './AppConnect.svelte';
	import { GazeManager } from '@473783/develex-core';
	import type { IConnectLogger } from '$lib/interfaces/IConnectLogger';
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import type { IGazeSaver } from '$lib/interfaces/IGazeSaver';
	import { onDestroy, onMount, setContext } from 'svelte';
	import type { AcceptedIntersect } from '$lib/database/repositories/Gaze.repository';
	import AppL1Instruction from './AppL1Instruction.svelte';
	import AppL1Practice from './AppL1Practice.svelte';
	import AppL1Intermezzo from './AppL1Intermezzo.svelte';
	import AppL2Intermezzo from './AppL2Intermezzo.svelte';
	import AppL2Trial from './AppL2Trial.svelte';
	import AppL3Trial from './AppL3Trial.svelte';
	import AppEnd from './AppEnd.svelte';
	import AppL2Instruction from './AppL2Instruction.svelte';
	import AppL2Practice from './AppL2Practice.svelte';
	import AppL1Trial from './AppL1Trial.svelte';
	import AppL3Instruction from './AppL3Instruction.svelte';

	export let state:
		| 'connect'
		| 'l1instruction'
		| 'l1practice'
		| 'l1intermezzo'
		| 'l1trial'
		| 'l2instruction'
		| 'l2practice'
		| 'l2intermezzo'
		| 'l2trial'
		| 'l3instruction'
		| 'l3trial'
		| 'end' = 'connect';

	export let pictureBase: string;

	export let questionsService: ITimestampQuestionService;
	export let connectLogger: IConnectLogger;
	export let doctorManager: IDoctorManager;
	export let gazeSaver: IGazeSaver;

	const gazeManager = new GazeManager();

	const onIntersect = (entry: AcceptedIntersect) => {
		gazeSaver.saveGazeInteraction(entry);
	};

	setContext('gazeManager', gazeManager);

	onMount(() => {
		gazeManager.on('intersect', onIntersect);
	});

	onDestroy(() => {
		onDestroyOrUnload();
	});

	const onDestroyOrUnload = () => {
		gazeManager.disconnect();
		gazeManager.off('intersect', onIntersect);
	};
</script>

<svelte:window on:beforeunload={onDestroyOrUnload} />

<main class="w-screen h-screen relative">
	{#if state === 'connect'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppConnect {gazeManager} {connectLogger} on:continue={() => (state = 'l1instruction')} />
		</div>
	{:else if state === 'l1instruction'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL1Instruction {questionsService} on:finished={() => (state = 'l1practice')} />
		</div>
	{:else if state === 'l1practice'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL1Practice {pictureBase} {doctorManager} on:finish={() => (state = 'l1intermezzo')} />
		</div>
	{:else if state === 'l1intermezzo'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL1Intermezzo {questionsService} on:finished={() => (state = 'l1trial')} />
		</div>
	{:else if state === 'l1trial'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL1Trial {pictureBase} {doctorManager} on:finish={() => (state = 'l2instruction')} />
		</div>
	{:else if state === 'l2instruction'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL2Instruction {questionsService} on:finished={() => (state = 'l2practice')} />
		</div>
	{:else if state === 'l2practice'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL2Practice {doctorManager} on:finish={() => (state = 'l2intermezzo')} />
		</div>
	{:else if state === 'l2intermezzo'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL2Intermezzo {questionsService} on:finished={() => (state = 'l2trial')} />
		</div>
	{:else if state === 'l2trial'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL2Trial
				{doctorManager}
				on:finish={() => {
					state = 'l3instruction';
					gazeManager.disconnect();
				}}
			/>
		</div>
	{:else if state === 'l3instruction'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL3Instruction {questionsService} on:finished={() => (state = 'l3trial')} />
		</div>
	{:else if state === 'l3trial'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppL3Trial {doctorManager} on:finish={() => (state = 'end')} />
		</div>
	{:else if state === 'end'}
		<div
			transition:fade={{ duration: 200 }}
			class="absolute w-screen h-screen flex items-center justify-center"
		>
			<AppEnd />
		</div>
	{/if}
</main>
