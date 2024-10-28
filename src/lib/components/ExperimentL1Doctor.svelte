<script lang="ts">
	import ExperimentDoctorHeader from './ExperimentDoctorHeader.svelte';
	import ExperimentRatingDistribution from './ExperimentRatingDistribution.svelte';
	import Intersecter from './Intersecter.svelte';

	export let pictureId: string;

	/**
	 * Base path for the image. Will differ for a storybook and the runtime
	 */
	export let pictureBase: string;

	export let picureExtension: string = 'png';

	/**
	 * In case the picture is not in the correct scale, systemic correction in percentages can be applied.
	 */
	export let pictureCorrection: number = 0.15;

	export let numberOfOneStars: number = 0;
	export let numberOfTwoStars: number = 0;
	export let numberOfThreeStars: number = 0;
	export let numberOfFourStars: number = 22;
	export let numberOfFiveStars: number = 48;

	export let doctorName: string = 'MUDr. Eva Malá';
	export let doctorAvgRating: number = 4.3;
	export let doctorNrRating: number = 22;

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
</script>

<div class="flex flex-col items-center justify-center gap-8">
	<Intersecter id="doctor-l1_{pictureId}_header">
		<ExperimentDoctorHeader
			{pictureId}
			{pictureBase}
			{picureExtension}
			{pictureCorrection}
			{doctorAvgRating}
			{doctorName}
			{doctorNrRating}
			{starBackgroundColor}
			{starFillColor}
			{starOutlineColor}
			on:load
		/>
	</Intersecter>
	<Intersecter id="doctor-l1_{pictureId}_rating">
		<ExperimentRatingDistribution
			{pictureId}
			{starBackgroundColor}
			{starFillColor}
			{starOutlineColor}
			{starOutlineWidth}
			{numberOfOneStars}
			{numberOfTwoStars}
			{numberOfThreeStars}
			{numberOfFourStars}
			{numberOfFiveStars}
		/>
	</Intersecter>
</div>
