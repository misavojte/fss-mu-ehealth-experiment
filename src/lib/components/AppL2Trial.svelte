<script lang="ts">
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import type { IGazeSaver } from '$lib/interfaces/IGazeSaver';
	import ExperimentL2Slides from './ExperimentL2Slides.svelte';

	export let doctorManager: IDoctorManager;
	export let gazeSaver: IGazeSaver;

	const doctors = doctorManager.getL2ObjectForTrial();
</script>

<ExperimentL2Slides {doctorManager} {gazeSaver} {doctors} on:finish />
