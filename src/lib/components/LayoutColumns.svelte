<script lang="ts">
	import LayoutCard from './LayoutCard.svelte';
</script>

<div class="flex items-center justify-center">
	<div class="grid grid-cols-2 gap-4 p-4">
		<slot name="left">
			<LayoutCard />
		</slot>
		<slot name="right">
			<LayoutCard />
		</slot>
	</div>
</div>
