<script lang="ts">
	import ExperimentRatingStar from './ExperimentRatingStar.svelte';

	export let rating: number = 2.45;
	export let maxRating: number = 5;
	export let numStars: number = 5;
	export let showRatingNumber: boolean = true;
	export let showRatingNumberFractionDigits: number = 2;

	// Reactive statement for calculating fill rates
	$: fillRates = Array(numStars)
		.fill(0)
		.map((_, index) => calculateFillRate(index, rating, maxRating, numStars));

	function calculateFillRate(
		starIndex: number,
		currentRating: number,
		currentMaxRating: number,
		currentNumStars: number
	) {
		const starValue = (currentRating / currentMaxRating) * currentNumStars;
		if (starIndex < starValue - 1) {
			return 1; // Fully filled star
		} else if (starIndex > starValue) {
			return 0; // No fill
		} else {
			return starValue - starIndex; // Partially filled star
		}
	}
</script>

<div class="flex gap-4 items-center">
	<div class="flex space-x-1">
		{#each fillRates as fillRate, index}
			<ExperimentRatingStar {fillRate} />
		{/each}
	</div>
	{#if showRatingNumber}
		<div class="font-thin text-lg text-neutral-700 leading-none mt-1">
			{rating.toFixed(showRatingNumberFractionDigits)}
		</div>
	{/if}
</div>
