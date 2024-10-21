<script lang="ts">
	import type { IDoctorObjectL1 } from '$lib/interfaces/IDoctor';
	import ExperimentSlide from './ExperimentL1Slide.svelte';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	export let slideBackgroundColor: string = '#0097b2';

	export let starBackgroundColor: string = '#fff';

	export let starFillColor: string = '#0097b2';

	export let starOutlineColor: string = '#0097b2';

	export let starOutlineWidth: string = '1px';

	/**
	 * Base path for the image. Will differ for a storybook and the runtime
	 */
	export let pictureBase: string;

	export let picureExtension: string = 'png';

	/**
	 * In case the picture is not in the correct scale, systemic correction in percentages can be applied.
	 */
	export let pictureCorrection: number = 0.15;

	export let doctors: IDoctorObjectL1[];

	export let currentDoctorIndex: number = 0;

	const dispatch = createEventDispatcher();

	const handleInput = (event: CustomEvent<number>) => {
		const likertValue = event.detail;
		dispatch('doctorEnded', {
			likertValue,
			doctorIndex: currentDoctorIndex,
			doctorId: doctors[currentDoctorIndex].pict_id
		});
		// if doctors available, increment the index
		if (currentDoctorIndex < doctors.length - 1) {
			currentDoctorIndex++;
		} else {
			dispatch('experimentEnded');
		}
	};
</script>

<div class="relative w-screen h-screen" style="background: {slideBackgroundColor};">
	{#each doctors as doctor, index (doctor.pict_id)}
		{#if currentDoctorIndex === index}
			<div
				class="absolute w-screen h-screen flex items-center justify-center"
				in:fade={{ duration: 200, delay: 400 }}
				out:fade={{ duration: 200 }}
			>
				<ExperimentSlide
					pictureId={doctor.pict_id}
					numberOfFiveStars={doctor.star_5}
					numberOfFourStars={doctor.star_4}
					numberOfThreeStars={doctor.star_3}
					numberOfTwoStars={doctor.star_2}
					numberOfOneStars={doctor.star_1}
					doctorAvgRating={doctor.stars_avg}
					doctorName={doctor.doctor_name}
					{pictureBase}
					{pictureCorrection}
					{picureExtension}
					{starBackgroundColor}
					{starFillColor}
					{starOutlineColor}
					{starOutlineWidth}
					on:input={handleInput}
				/>
			</div>
		{/if}
	{/each}
</div>
