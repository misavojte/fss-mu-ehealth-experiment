<script lang="ts">
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import type { IGazeSaver } from '$lib/interfaces/IGazeSaver';
	import ExperimentL3Slides from './ExperimentL3Slides.svelte';

	export let doctorManager: IDoctorManager;
	export let gazeSaver: IGazeSaver;

	const doctorsBad = doctorManager.getL3ObjectBad();
	const doctorsGood = doctorManager.getL3ObjectGood();
</script>

<ExperimentL3Slides {doctorManager} {gazeSaver} {doctorsBad} {doctorsGood} on:finish />
