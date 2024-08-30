<script lang="ts">
	import ExperimentDoctorHeader from './ExperimentDoctorHeader.svelte';
	import ExperimentDoctorImage from './ExperimentDoctorImage.svelte';
	import ExperimentRatingDistribution from './ExperimentRatingDistribution.svelte';
	import LayoutCard from './LayoutCard.svelte';

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
</script>

<LayoutCard>
	<div class="flex flex-col items-center justify-center gap-8">
		<ExperimentDoctorHeader {pictureId} {pictureBase} {picureExtension} {pictureCorrection} />
		<ExperimentRatingDistribution
			{numberOfOneStars}
			{numberOfTwoStars}
			{numberOfThreeStars}
			{numberOfFourStars}
			{numberOfFiveStars}
		/>
	</div>
</LayoutCard>
