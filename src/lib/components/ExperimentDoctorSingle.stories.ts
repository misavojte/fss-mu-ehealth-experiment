import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentDoctorSingle from './ExperimentDoctorSingle.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentDoctorSingle',
	component: ExperimentDoctorSingle,
	tags: ['autodocs']
} satisfies Meta<ExperimentDoctorSingle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
