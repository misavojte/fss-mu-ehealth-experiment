<script lang="ts">
	import ExperimentRating from './ExperimentRating.svelte';

	export let title: string;
	export let rating: number;
	export let review: string;

	/**
	 * Non-reactive
	 */
	export let starBackgroundColor = '#fff';

	/**
	 * Non-reactive
	 */
	export let starFillColor = '#0097b2';

	/**
	 * Non-reactive
	 */
	export let starOutlineColor = 'transparent';

	/**
	 * Non-reactive
	 */
	export let starOutlineWidth = '0px';

	export let scalingFactor = 0.75;
</script>

<article class="flex flex-col gap-2 p-4">
	<header class="flex items-center gap-1 justify-start">
		<h2 class="mt-1 text-md font-bold">{title}</h2>
		<ExperimentRating
			{rating}
			{starBackgroundColor}
			{starFillColor}
			{starOutlineColor}
			{starOutlineWidth}
			{scalingFactor}
		/>
	</header>
	<main>
		<p class="text-sm">{review}</p>
	</main>
</article>
