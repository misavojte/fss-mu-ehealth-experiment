<script lang="ts">
	import ExperimentDoctorImage from './ExperimentDoctorImage.svelte';

	export let doctorName: string = 'MUDr. Eva Malá';

	export let doctorAvgRating: number = 4.3;

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
</script>

<div class="flex gap-6 items-center">
	<ExperimentDoctorImage {pictureId} {pictureBase} {picureExtension} {pictureCorrection} />
	<div>
		<div class="text-2xl font-bold text-neutral-700 mb-2">
			{doctorName}
		</div>
		<div class="text-neutral-700">
			Celkové hodnocení {doctorAvgRating}
		</div>
	</div>
</div>
