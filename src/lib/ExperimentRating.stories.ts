import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentRating from './ExperimentRating.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentRating',
	component: ExperimentRating,
	tags: ['autodocs'],
	argTypes: {
		starBackgroundColor: { control: 'color' },
		starFillColor: { control: 'color' },
		starOutlineColor: { control: 'color' }
	}
} satisfies Meta<ExperimentRating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};

export const Blue: Story = {
	args: {
		starBackgroundColor: '#fff',
		starFillColor: '#0097b2',
		starOutlineColor: '#0097b2',
		starOutlineWidth: '1px'
	}
};
