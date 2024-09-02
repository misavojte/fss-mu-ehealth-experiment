<script lang="ts">
	import ExperimentRating from './ExperimentRating.svelte';

	export let numberOfOneStars: number = 0;
	export let numberOfTwoStars: number = 0;
	export let numberOfThreeStars: number = 0;
	export let numberOfFourStars: number = 22;
	export let numberOfFiveStars: number = 48;

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
	export let starOutlineWidth = '1px';

	let numberOfStarsDistribution: { [key: number]: number };
	$: numberOfStarsDistribution = {
		1: numberOfOneStars,
		2: numberOfTwoStars,
		3: numberOfThreeStars,
		4: numberOfFourStars,
		5: numberOfFiveStars
	};
</script>

<div class="grid items-center text-neutral-700 w-fit gap-x-4 gap-y-2 rating-grid">
	{#each [5, 4, 3, 2, 1] as i}
		<ExperimentRating
			rating={i}
			{starBackgroundColor}
			{starFillColor}
			{starOutlineColor}
			{starOutlineWidth}
		/><span class="w-fit">{numberOfStarsDistribution[i]} recenzí</span>
	{/each}
</div>

<style>
	.rating-grid {
		grid-template-columns: 1fr max-content;
		grid-template-columns: 1fr -webkit-max-content;
	}
</style>
