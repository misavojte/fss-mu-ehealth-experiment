<script lang="ts">
	import QuestionManager from '$lib/components/QuestionManager.svelte';
	import type { IQuestionBattery, ITimestampQuestionService } from '$lib/interfaces/IQuestion';
	import LL from '../../i18n/i18n-svelte';
	import { createEventDispatcher } from 'svelte';
	import LayoutFooter from '$lib/components/LayoutFooter.svelte';
	import { get } from 'svelte/store';

	export let questionsService: ITimestampQuestionService;

	const dispatch = createEventDispatcher();

	let questions: IQuestionBattery = [
		{
			id: 'l3-instruction-1',
			headingText: $LL['question']['l3-instruction-1']['heading'](),
			confirmText: $LL['question']['l3-instruction-1']['confirm'](),
			paragraphs: [get(LL).question['l3-instruction-1'].paragraphs[1]()],
			type: 'instruction',
			required: true
		}
	];

	const handleQuestionnaireDone = () => {
		dispatch('finished');
	};
</script>

<div class="w-full h-full p-8 mx-auto flex flex-col gap-8">
	<QuestionManager
		{questions}
		{questionsService}
		showProgress={false}
		on:questionnaireDone={handleQuestionnaireDone}
	/>
	<LayoutFooter />
</div>
