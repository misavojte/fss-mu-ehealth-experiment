<script lang="ts">
	import ExperimentRatingStar from './ExperimentRatingStar.svelte';

	export let rating: number = 2.45;
	export let maxRating: number = 5;
	export let numStars: number = 5;

	/**
	 * Non-reactive
	 */
	export let starBackgroundColor = '#d4d4d4';

	/**
	 * Non-reactive
	 */
	export let starFillColor = '#eab308';

	/**
	 * Non-reactive
	 */
	export let starOutlineColor = 'transparent';

	/**
	 * Non-reactive
	 */
	export let starOutlineWidth = '0px';

	export let scalingFactor = 1;

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
		console.log('starIndex', starIndex);
		const starValue = (currentRating / currentMaxRating) * currentNumStars;
		console.log('starValue', starValue);
		if (starIndex + 1 <= starValue) {
			return 1; // Fully filled star
		} else if (starIndex >= starValue) {
			return 0; // No fill
		} else {
			return starValue - starIndex; // Partially filled star
		}
	}
</script>

<div class="flex gap-4 items-center">
	<div class="flex space-x-1" style="transform: scale({scalingFactor})">
		{#each fillRates as fillRate}
			<ExperimentRatingStar
				{fillRate}
				{starBackgroundColor}
				{starFillColor}
				{starOutlineColor}
				{starOutlineWidth}
			/>
		{/each}
	</div>
</div>
