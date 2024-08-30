<script lang="ts">
	import LayoutCard from './LayoutCard.svelte';

	export let backgroundColor: string = '#0097b2';
</script>

<div class="grid grid-cols-2 gap-4 p-4" style="background: {backgroundColor};">
	<slot>
		<LayoutCard />
	</slot>
	<slot>
		<LayoutCard />
	</slot>
</div>
