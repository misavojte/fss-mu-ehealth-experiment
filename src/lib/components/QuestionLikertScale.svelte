<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let id: string = 'likert';

	export let required: boolean = true;

	export let options: string[] = ['1', '2', '3', '4', '5'];

	export let labelMin: string = 'Určitě ne';

	export let labelAvg: string = 'Ani tak, ani onak';

	export let labelMax: string = 'Určitě ano';

	export let value: string = '';

	const dispatch = createEventDispatcher();

	const handleOptionChange = () => {
		dispatch('input');
	};

	$: labelContainerMaxWidth = options.length * 4 + 4 + 'rem'; /* 4rem */
</script>

<div class="flex justify-center flex-col w-full">
	<ul class="flex gap-2 justify-center relative">
		{#each options as option}
			<li class="w-16 h-16 shrink aspect-square">
				<input
					type="radio"
					id={id + '_' + option}
					name={id + '_' + option}
					value={option}
					class="hidden peer"
					required
					bind:group={value}
					on:change={handleOptionChange}
				/>
				<label
					for={id + '_' + option}
					class="select-none peer flex items-center justify-center border-2 border-gray-300 rounded-lg p-4 mb-4 cursor-pointer {value ===
					option
						? 'bg-blue-500 text-white'
						: 'bg-white hover:bg-neutral-100'}"
				>
					{option}
				</label>
			</li>
		{/each}
	</ul>
	<div
		class="grid grid-cols-3 gap-2 justify-between mx-auto w-full text-neutral-500 font-thin text-sm"
		style="max-width: {labelContainerMaxWidth};"
	>
		<div class="text-left">{labelMin}</div>
		<div class="text-center">{labelAvg}</div>
		<div class="text-right">{labelMax}</div>
	</div>
</div>
