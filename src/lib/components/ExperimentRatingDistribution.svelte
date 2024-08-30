<script lang="ts">
	import ExperimentRating from './ExperimentRating.svelte';

	export let numberOfOneStars: number = 0;
	export let numberOfTwoStars: number = 0;
	export let numberOfThreeStars: number = 0;
	export let numberOfFourStars: number = 22;
	export let numberOfFiveStars: number = 48;
</script>

<div class="grid grid-cols-2 items-center text-neutral-700 w-fit gap-x-4 gap-y-2">
	<ExperimentRating rating={5} /><span>{numberOfFiveStars} recenzí</span>
	<ExperimentRating rating={4} /><span>{numberOfFourStars} recenzí</span>
	<ExperimentRating rating={3} /><span>{numberOfThreeStars} recenzí</span>
	<ExperimentRating rating={2} /><span>{numberOfTwoStars} recenzí</span>
	<ExperimentRating rating={1} /><span>{numberOfOneStars} recenzí</span>
</div>
