import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentSlides from './ExperimentSlides.svelte';
import { DoctorManagerBase } from '$lib/services/DoctorManagerBase';

const doctorManager = new DoctorManagerBase();

async function loadDoctors() {
	const practiceDoctors = await doctorManager.getDoctorObjectForPractice();
	const trialDoctors = await doctorManager.getDoctorObjectForTrial();
	return { practiceDoctors, trialDoctors };
}

// We wrap the setup in an immediately invoked async function to ensure it's ready before exporting the stories
const { practiceDoctors, trialDoctors } = await loadDoctors();

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
