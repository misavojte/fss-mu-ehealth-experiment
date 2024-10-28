<script lang="ts">
	import ExperimentRating from './ExperimentRating.svelte';
	import Intersecter from './Intersecter.svelte';

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

	export let size = 26;

	export let pictureId: string = 'id-test';

	let numberOfStarsDistribution: { [key: number]: number };
	$: numberOfStarsDistribution = {
		1: numberOfOneStars,
		2: numberOfTwoStars,
		3: numberOfThreeStars,
		4: numberOfFourStars,
		5: numberOfFiveStars
	};
</script>

<h3 class="text-lg font-bold text-center mb-4 text-neutral-700">Distribuce hodnocení</h3>
<div class="grid items-center text-neutral-700 w-fit gap-x-4 gap-y-4 rating-grid">
	{#each [5, 4, 3, 2, 1] as i}
		<Intersecter bufferSize={10} id="doctor-l1_{pictureId}_rating_star_{i}">
			<ExperimentRating
				rating={i}
				{starBackgroundColor}
				{starFillColor}
				{starOutlineColor}
				{starOutlineWidth}
				{size}
			/>
		</Intersecter>
		<Intersecter bufferSize={10} id="doctor-l1_{pictureId}_rating_star_{i}_count">
			<span class="w-fit">{numberOfStarsDistribution[i]} recenzí</span>
		</Intersecter>
	{/each}
</div>

<style>
	.rating-grid {
		grid-template-columns: 1fr max-content;
		grid-template-columns: 1fr -webkit-max-content;
	}
</style>
