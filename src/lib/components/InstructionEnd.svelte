<script lang="ts">
	import LL from '../../i18n/i18n-svelte';
	import LayoutHeading from './LayoutHeading.svelte';
	import LayoutCenteredContainer from './LayoutCenteredContainer.svelte';
</script>

<LayoutCenteredContainer>
	<LayoutHeading>{$LL.end.title()}</LayoutHeading>
	<p class="text-lg text-gray-700 mt-8">{$LL.end.text()}</p>
</LayoutCenteredContainer>
