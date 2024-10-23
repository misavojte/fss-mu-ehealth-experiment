<script lang="ts">
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import ExperimentL3Slides from './ExperimentL3Slides.svelte';

	export let doctorManager: IDoctorManager;

	const doctorsBad = doctorManager.getL3ObjectBad();
	const doctorsGood = doctorManager.getL3ObjectGood();
</script>

<ExperimentL3Slides {doctorManager} {doctorsBad} {doctorsGood} on:finish />
