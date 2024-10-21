import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentL1Slides from './ExperimentL1Slides.svelte';
import { DoctorManagerMock } from '$lib/services/DoctorManagerMock';

const doctorManager = new DoctorManagerMock();

const practiceDoctors = doctorManager.getL1ObjectForPractice();
const trialDoctors = doctorManager.getL1ObjectForTrial();

const meta = {
	title: 'Experiment/ExperimentL1Slides',
	component: ExperimentL1Slides,
	tags: ['autodocs'],
	argTypes: {
		slideBackgroundColor: { control: 'color' },
		starBackgroundColor: { control: 'color' },
		starFillColor: { control: 'color' },
		starOutlineColor: { control: 'color' }
	}
} satisfies Meta<ExperimentL1Slides>;

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
