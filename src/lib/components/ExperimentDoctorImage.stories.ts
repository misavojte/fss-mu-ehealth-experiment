import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentDoctorImage from './ExperimentDoctorImage.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentDoctorImage',
	component: ExperimentDoctorImage,
	tags: ['autodocs']
} satisfies Meta<ExperimentDoctorImage>;

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