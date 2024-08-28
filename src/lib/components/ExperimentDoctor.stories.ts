import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentDoctor from './ExperimentDoctor.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentDoctor',
	component: ExperimentDoctor,
	tags: ['autodocs']
} satisfies Meta<ExperimentDoctor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
