<script lang="ts">
	import ExperimentRating from './ExperimentRating.svelte';

	export let numberOfOneStars: number = 0;
	export let numberOfTwoStars: number = 0;
	export let numberOfThreeStars: number = 0;
	export let numberOfFourStars: number = 22;
	export let numberOfFiveStars: number = 48;
</script>

<div class="grid items-center text-neutral-700 w-fit gap-x-4 gap-y-2 rating-grid">
	<ExperimentRating rating={5} /><span class="w-fit">{numberOfFiveStars} recenzí</span>
	<ExperimentRating rating={4} /><span class="w-fit">{numberOfFourStars} recenzí</span>
	<ExperimentRating rating={3} /><span class="w-fit">{numberOfThreeStars} recenzí</span>
	<ExperimentRating rating={2} /><span class="w-fit">{numberOfTwoStars} recenzí</span>
	<ExperimentRating rating={1} /><span class="w-fit">{numberOfOneStars} recenzí</span>
</div>

<style>
	.rating-grid {
		grid-template-columns: 1fr max-content;
		grid-template-columns: 1fr -webkit-max-content;
	}
</style>
