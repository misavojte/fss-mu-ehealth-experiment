<script>
	import LayoutCenteredContainer from './LayoutCenteredContainer.svelte';
	import LayoutButton from './LayoutButton.svelte';
	import LayoutHeading from './LayoutHeading.svelte';
	import { createEventDispatcher } from 'svelte';
	import LL from '../../i18n/i18n-svelte';

	const dispatch = createEventDispatcher();

	function onNext() {
		dispatch('next');
	}
</script>

<LayoutCenteredContainer>
	<LayoutHeading>
		{$LL.intermezzo.title()}
	</LayoutHeading>
	<p class="text-lg text-gray-700 my-6">
		{$LL.intermezzo.text()}
	</p>
	<LayoutButton on:click={onNext}>
		{$LL.intermezzo.button()}
	</LayoutButton>
</LayoutCenteredContainer>
