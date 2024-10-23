<script lang="ts">
	import type { IDoctorManager } from '$lib/interfaces/IDoctor';
	import ExperimentL2Slides from './ExperimentL2Slides.svelte';

	export let doctorManager: IDoctorManager;

	const doctors = doctorManager.getL2ObjectForPractice();
</script>

<ExperimentL2Slides {doctorManager} {doctors} on:finish />
