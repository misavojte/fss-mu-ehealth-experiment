import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentOpinionCounter from './ExperimentOpinionCounter.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentOpinionCounter',
	component: ExperimentOpinionCounter,
	tags: ['autodocs'],
	argTypes: {
		textColor: { control: 'color' }
	}
} satisfies Meta<ExperimentOpinionCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
