import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentSlides from './ExperimentSlides.svelte';
import { DoctorManagerBase } from '$lib/services/DoctorManagerBase';

const doctorManager = new DoctorManagerBase();

const practiceDoctors = doctorManager.getDoctorObjectForPractice();
const trialDoctors = doctorManager.getDoctorObjectForTrial();

const meta = {
	title: 'Experiment/ExperimentSlides',
	component: ExperimentSlides,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
		starBackgroundColor: { control: 'color' },
		starFillColor: { control: 'color' },
		starOutlineColor: { control: 'color' }
	}
} satisfies Meta<ExperimentSlides>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		pictureBase: 'stimuli',
		picureExtension: 'png',
		pictureCorrection: 0.15,
		doctors: practiceDoctors // Pass the resolved data here
	}
};

export const GoldenStars: Story = {
	args: {
		pictureBase: 'stimuli',
		picureExtension: 'png',
		pictureCorrection: 0.15,
		starFillColor: 'gold',
		starOutlineWidth: '0px',
		starBackgroundColor: '#f0f0f0',
		doctors: trialDoctors // Pass the resolved data here
	}
};
