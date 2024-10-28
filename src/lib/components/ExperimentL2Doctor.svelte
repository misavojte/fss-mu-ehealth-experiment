<script lang="ts">
	import ExperimentDoctorReview from './ExperimentDoctorReview.svelte';
	import ExperimentRating from './ExperimentRating.svelte';
	import Intersecter from './Intersecter.svelte';

	export let id: string;
	export let name: string;
	export let rating: number;
	export let reviewCount: number;
	export let primaryColor: string = '#0097b2';
	export let reviews: Array<{ title: string; rating: number; review: string; id: string }>;
</script>

<div class="flex gap-6 bg-white justify-start items-start">
	<!-- Doctor Column -->
	<Intersecter id="doctor-l2_{id}_header">
		<div class="p-4 flex-shrink-0 size-64">
			<h1 class="text-xl leading-none font-bold mb-4">{name}</h1>
			<div class="mb-2 flex flex-col gap-2">
				<ExperimentRating
					{rating}
					starFillColor={primaryColor}
					starOutlineColor={primaryColor}
					starBackgroundColor="#fff"
					starOutlineWidth="1px"
					size={25}
				/>
				<p class="text-md font-bold leading-none" style="color: {primaryColor}">
					Celkové hodnocení {rating}
				</p>
				<p class="leading-none" style="color: {primaryColor}">
					Počet recenzí: {reviewCount}
				</p>
			</div>
		</div>
	</Intersecter>
	<!-- Review Column -->
	<Intersecter id="doctor-l2_{id}_reviews">
		<div>
			{#each reviews as { title, rating, review, id }}
				<Intersecter id="doctor-l2_{id}_review_{id}" bufferSize={10}>
					<ExperimentDoctorReview {title} {rating} {review} starFillColor={primaryColor} />
				</Intersecter>
			{/each}
		</div>
	</Intersecter>
</div>
