<script lang="ts">
	import ExperimentSlides from './ExperimentSlides.svelte';
	import InstructionStart from './InstructionStart.svelte';
	import InstructionIntermezzo from './InstructionIntermezzo.svelte';
	import InstructionEnd from './InstructionEnd.svelte';
	import LayoutLoader from './LayoutLoader.svelte';
	import { DoctorManagerBase } from '$lib/services/DoctorManagerBase';

	export let state: 'start' | 'practice' | 'intermezzo' | 'experiment' | 'end' = 'start';

	export let pictureBase: string;

	const doctorManager = new DoctorManagerBase();
</script>

<main class="w-screen h-screen">
	{#if state === 'start'}
		<InstructionStart
			on:next={() => {
				state = 'practice';
			}}
		/>
	{:else if state === 'practice'}
		<ExperimentSlides
			{pictureBase}
			doctors={doctorManager.getDoctorObjectForPractice()}
			on:experimentEnded={() => {
				state = 'intermezzo';
			}}
		/>
	{:else if state === 'intermezzo'}
		<InstructionIntermezzo
			on:next={() => {
				state = 'experiment';
			}}
		/>
	{:else if state === 'experiment'}
		<ExperimentSlides
			{pictureBase}
			doctors={doctorManager.getDoctorObjectForTrial()}
			on:experimentEnded={() => {
				state = 'end';
			}}
		/>
	{:else if state === 'end'}
		<InstructionEnd />
	{:else if state === 'loading'}
		<LayoutLoader />
	{/if}
</main>
