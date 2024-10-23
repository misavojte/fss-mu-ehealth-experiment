<script lang="ts">
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import ExperimentL1Slides from './ExperimentL1Slides.svelte';

	export let pictureBase: string;
	export let doctorManager: IDoctorManager;

	const doctors = doctorManager.getL1ObjectForPractice();
</script>

<ExperimentL1Slides {pictureBase} {doctorManager} {doctors} on:finish />
