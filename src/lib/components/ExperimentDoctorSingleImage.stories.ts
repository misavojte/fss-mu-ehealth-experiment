import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentDoctorSingleImage from './ExperimentDoctorSingleImage.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentDoctorSingleImage',
	component: ExperimentDoctorSingleImage,
	tags: ['autodocs']
} satisfies Meta<ExperimentDoctorSingleImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		pictureBase: 'stimuli',
		pictureId: 'p_00a_f',
		picureExtension: 'png',
		pictureCorrection: 0.15
	}
};
