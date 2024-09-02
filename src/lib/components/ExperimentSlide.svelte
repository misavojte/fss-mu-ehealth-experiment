<script lang="ts">
	import ExperimentDoctor from './ExperimentDoctor.svelte';
	import ExperimentLikertScale from './ExperimentLikertScale.svelte';
	import LayoutColumns from './LayoutColumns.svelte';

	export let backgroundColor: string = '#0097b2';

	export let starBackgroundColor: string = '#fff';

	export let starFillColor: string = '#0097b2';

	export let starOutlineColor: string = '#0097b2';

	export let starOutlineWidth: string = '1px';

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

<LayoutColumns {backgroundColor}>
	<ExperimentDoctor
		{pictureId}
		{pictureBase}
		{pictureCorrection}
		{picureExtension}
		{starBackgroundColor}
		{starFillColor}
		{starOutlineColor}
		{starOutlineWidth}
		slot="left"
	/>
	<ExperimentLikertScale on:input slot="right" />
</LayoutColumns>
