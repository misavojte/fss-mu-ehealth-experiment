<script lang="ts">
	import LayoutCard from './LayoutCard.svelte';

	export let width: number = 720;
	export let height: number = 480;
	export let top: number = 0;
	export let left: number = 0;
</script>

<div class="absolute" style="width: {width}px; height: {height}px; top: {top}px; left: {left}px;">
	<LayoutCard>
		<slot />
	</LayoutCard>
</div>
