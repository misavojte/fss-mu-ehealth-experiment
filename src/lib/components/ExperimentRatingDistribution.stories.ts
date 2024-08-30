import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentRatingDistribution from './ExperimentRatingDistribution.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentRatingDistribution',
	component: ExperimentRatingDistribution,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<ExperimentRatingDistribution>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
