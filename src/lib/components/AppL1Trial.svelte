<script lang="ts">
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import ExperimentL1Slides from './ExperimentL1Slides.svelte';

	export let pictureBase: string;
	export let doctorManager: IDoctorManager;

	const timeoutBeforeLikert: number = 3000;

	const doctors = doctorManager.getL1ObjectForTrial();
</script>

<ExperimentL1Slides {timeoutBeforeLikert} {pictureBase} {doctorManager} {doctors} on:finish />
