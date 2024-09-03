<script lang="ts">
	import { loadImage } from '$lib/utils/preloadMedia';
	import { fade } from 'svelte/transition';

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

	$: pictureSrc = pictureBase + '/' + pictureId + '.' + picureExtension;
	$: loadImagePromise = loadImage(pictureSrc);
	$: pictureWidth = pictureCorrection * 100 + 100 + '%';
	$: pictureMargin = pictureCorrection * -50 + '%';
</script>

<div
	class="rounded-full w-32 h-32 bg-neutral-100 overflow-hidden relative border border-neutral-300 shrink-0"
>
	{#await loadImagePromise then loadedImage}
		<img
			src={loadedImage.src}
			class="absolute top-0 left-0"
			style="width: {pictureWidth}; height: {pictureWidth}; max-width: unset; margin-left: {pictureMargin}; margin-top: {pictureMargin}"
			alt="Obrázek doktora"
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 200 }}
		/>
	{/await}
</div>
