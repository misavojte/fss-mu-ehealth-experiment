<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { ComponentType } from 'svelte';
	import LayoutColumns from './LayoutColumns.svelte';
	import Layout from '../../routes/+layout.svelte';
	import LayoutCard from './LayoutCard.svelte';

	export let components: { component: ComponentType; id: string }[] = [
		{ component: LayoutColumns, id: 'columns' },
		{ component: Layout, id: 'layout' },
		{ component: LayoutCard, id: 'card' }
	];
	export let activeId: string;

	const getActiveComponent = () => {
		return components.find((comp) => comp.id === activeId)?.component;
	};
</script>

<div class="container">
	{#if activeId}
		{#key activeId}
			{#if getActiveComponent()}
				<div class="container" transition:fade>
					<svelte:component this={getActiveComponent()} />
				</div>
			{/if}
		{/key}
	{/if}
</div>

<style>
	.container {
		position: absolute;
		width: 100vw;
		height: 100vh;
	}
</style>
