<script lang="ts">
	import type { IDoctorObjectL2 } from '$lib/interfaces/IDoctor';
	import { fade } from 'svelte/transition';
	import ExperimentL2Slide from './ExperimentL2Slide.svelte';
	import { writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';

	export let slideBackgroundColor: string = '#0097b2';
	export let primaryColor: string = '#0097b2';
	export let doctors: IDoctorObjectL2[];

	let activeDoctorIndex = writable(0);

	const dispatch = createEventDispatcher();
	const handleFinish = () => {
		if ($activeDoctorIndex === doctors.length - 1) {
			dispatch('experimentEnded');
			return;
		}
		activeDoctorIndex.update((index) => index + 1);
	};
</script>

<div class="relative w-screen h-screen" style="background: {slideBackgroundColor};">
	{#each doctors as doctor, index (doctor.nr)}
		{#if $activeDoctorIndex === index}
			{@const reviews = doctor.reviews.map((review) => ({
				title: review.reviewer_nick,
				rating: Number(review.star_statement),
				review: review.statement,
				id: review.nr + '_' + doctor.nr
			}))}
			<div
				class="absolute w-screen h-screen flex items-center justify-center"
				in:fade={{ duration: 200, delay: 400 }}
				out:fade={{ duration: 200 }}
			>
				<ExperimentL2Slide
					id={doctor.nr}
					name={doctor.doctor_name}
					rating={Number(doctor.star_doc)}
					reviewCount={Number(doctor.rev_nr)}
					{reviews}
					{primaryColor}
					on:finish={handleFinish}
				/>
			</div>
		{/if}
	{/each}
</div>
