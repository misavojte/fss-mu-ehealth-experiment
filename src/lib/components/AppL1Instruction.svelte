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
			id: '1',
			headingText: $LL['question']['1']['heading'](),
			confirmText: $LL['question']['1']['confirm'](),
			paragraphs: [get(LL).question[1].paragraphs[1]()],
			type: 'instruction',
			required: true
		},
		{
			id: 'linking',
			headingText: $LL.question[3].heading(),
			confirmText: $LL.question[3].confirm(),
			type: 'text',
			required: true
		},
		{
			id: '2',
			headingText: $LL.question[2].heading(),
			confirmText: $LL.question[2].confirm(),
			type: 'instruction',
			paragraphs: [get(LL).question[2].paragraphs[1]()],
			required: true
		},
		{
			id: '4',
			headingText: $LL.question[4].heading(),
			confirmText: $LL.question[4].confirm(),
			type: 'instruction',
			paragraphs: [get(LL).question[4].paragraphs[1]()],
			required: true
		}
	];

	const handleQuestionnaireDone = () => {
		dispatch('finished');
	};
</script>

<div class="w-full h-full p-8 mx-auto flex flex-col gap-8">
	<QuestionManager {questions} {questionsService} on:questionnaireDone={handleQuestionnaireDone} />
	<LayoutFooter />
</div>
