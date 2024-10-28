<script lang="ts">
	import ExperimentDoctorImage from './ExperimentDoctorImage.svelte';
	import ExperimentRating from './ExperimentRating.svelte';
	import Intersecter from './Intersecter.svelte';

	export let doctorName: string = 'MUDr. Eva Malá';

	export let doctorAvgRating: number = 4.3;

	export let doctorNrRating: number = 22;

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
</script>

<div class="flex gap-8 items-center">
	<Intersecter id="doctor-l1_{pictureId}_header-image" bufferSize={10}>
		<ExperimentDoctorImage
			on:load
			{pictureId}
			{pictureBase}
			{picureExtension}
			{pictureCorrection}
		/>
	</Intersecter>
	<div>
		<Intersecter id="doctor-l1_{pictureId}_header-name" bufferSize={10}>
			<h3 class="text-lg font-bold mb-4 text-neutral-700">{doctorName}</h3>
		</Intersecter>
		<Intersecter id="doctor-l1_{pictureId}_header-rating" bufferSize={10}>
			<div class="flex gap-3 text-neutral-700 w-fit items-center justify-center mb-4">
				<ExperimentRating
					rating={doctorAvgRating}
					{starBackgroundColor}
					{starFillColor}
					{starOutlineColor}
					{starOutlineWidth}
					{size}
				/><span class="w-fit leading-none">{doctorAvgRating.toFixed(1)} / 5.0</span>
			</div>
		</Intersecter>
		<Intersecter id="doctor-l1_{pictureId}_header-rating-count" bufferSize={10}>
			<div class="text-neutral-700">
				Celkem {doctorNrRating} recenzí
			</div>
		</Intersecter>
	</div>
</div>
