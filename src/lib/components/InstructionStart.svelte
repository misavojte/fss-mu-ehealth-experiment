<script>
	import LayoutCenteredContainer from './LayoutCenteredContainer.svelte';
	import LayoutHeading from './LayoutHeading.svelte';
	import LL from '../../i18n/i18n-svelte';
	import LayoutButton from './LayoutButton.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function onNext() {
		dispatch('next');
	}
</script>

<LayoutCenteredContainer>
	<LayoutHeading>
		{$LL.start.title()}
	</LayoutHeading>
	<p class="text-lg text-gray-700 my-6">
		{$LL.start.text()}
	</p>
	<LayoutButton on:click={onNext}>
		{$LL.start.button()}
	</LayoutButton>
</LayoutCenteredContainer>
