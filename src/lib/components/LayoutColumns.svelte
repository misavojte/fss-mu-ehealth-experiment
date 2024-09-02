<script lang="ts">
	import LayoutCard from './LayoutCard.svelte';

	export let backgroundColor: string = '#0097b2';
</script>

<div class="flex items-center justify-center" style="background: {backgroundColor};">
	<div class="grid grid-cols-2 gap-4 p-4">
		<slot name="left">
			<LayoutCard />
		</slot>
		<slot name="right">
			<LayoutCard />
		</slot>
	</div>
</div>
