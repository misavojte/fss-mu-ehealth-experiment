<script lang="ts">
	import LL from '../../i18n/i18n-svelte';
	import LayoutHeading from './LayoutHeading.svelte';
	import LayoutCenteredContainer from './LayoutCenteredContainer.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
</script>

<LayoutCenteredContainer>
	<LayoutHeading>{$LL.end.title()}</LayoutHeading>
	<p class="text-lg text-gray-700 mt-8">{$LL.end.text()}</p>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
		on:click={() => goto(`${base}/download`)}>{$LL.end.button()}</button
	>
</LayoutCenteredContainer>
