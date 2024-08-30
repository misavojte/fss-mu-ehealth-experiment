<script lang="ts">
	import QuestionLikertScale from './QuestionLikertScale.svelte';
	import LayoutCard from './LayoutCard.svelte';

	export let id: string = 'likert';

	export let required: boolean = true;

	export let options: string[] = ['1', '2', '3', '4', '5'];

	export let labelMin: string = 'Vůbec';

	export let labelAvg: string = 'Ani tak, ani onak';

	export let labelMax: string = 'Maximálně';

	export let value: string = '';

	export let question: string =
		'Jak moc je pravděpodobné, že byste si za svého ošetřujícího lékaře vybrali tohoto člověka?';
</script>

<LayoutCard>
	<div class="text-neutral-700 text-2xl font-bold text-center mb-8">{question}</div>
	<QuestionLikertScale
		{id}
		{required}
		{options}
		{labelMin}
		{labelAvg}
		{labelMax}
		bind:value
		on:input
	/>
</LayoutCard>
