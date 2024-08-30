import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentLikertScale from './ExperimentLikertScale.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentLikertScale',
	component: ExperimentLikertScale,
	tags: ['autodocs']
} satisfies Meta<ExperimentLikertScale>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
