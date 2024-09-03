<script lang="ts">
	import LL from '../../i18n/i18n-svelte';
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="flex flex-col items-center">
		<h1 class="text-3xl font-bold text-gray-700">{$LL.end.title()}</h1>
		<p class="text-lg text-gray-700 mt-8">{$LL.end.text()}</p>
	</div>
</div>
