import type { Meta, StoryObj } from '@storybook/svelte';
import QuestionLikertScale from './QuestionLikertScale.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Question/QuestionLikertScale',
	component: QuestionLikertScale,
	tags: ['autodocs']
} satisfies Meta<QuestionLikertScale>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
