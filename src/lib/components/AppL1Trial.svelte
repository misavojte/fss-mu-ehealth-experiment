<script lang="ts">
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import type { IGazeSaver } from '$lib/interfaces/IGazeSaver';
	import ExperimentL1Slides from './ExperimentL1Slides.svelte';

	export let pictureBase: string;
	export let doctorManager: IDoctorManager;
	export let gazeSaver: IGazeSaver;

	const doctors = doctorManager.getL1ObjectForTrial();
</script>

<ExperimentL1Slides {pictureBase} {doctorManager} {gazeSaver} {doctors} on:finish />
