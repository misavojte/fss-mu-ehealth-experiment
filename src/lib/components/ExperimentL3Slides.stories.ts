import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentL3Slides from './ExperimentL3Slides.svelte';
import { DoctorManagerMock } from '$lib/services/DoctorManagerMock';

const doctorManager = new DoctorManagerMock();

const doctorsBad = doctorManager.getL3ObjectBad();
const doctorsGood = doctorManager.getL3ObjectGood();

const meta = {
	title: 'Experiment/ExperimentL3Slides',
	component: ExperimentL3Slides,
	tags: ['autodocs'],
	argTypes: {
		slideBackgroundColor: { control: 'color' }
	}
} satisfies Meta<ExperimentL3Slides>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		doctorsBad,
		doctorsGood
	}
};
