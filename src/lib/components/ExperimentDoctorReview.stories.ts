import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentDoctorReview from './ExperimentDoctorReview.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentDoctorReview',
	component: ExperimentDoctorReview,
	tags: ['autodocs']
} satisfies Meta<ExperimentDoctorReview>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		title: 'M. V.',
		rating: 5,
		review: 'Doktor by měl být vždy takto příjemný a ochotný. Vřele doporučuji.',
		starBackgroundColor: '#fff',
		starFillColor: '#0097b2',
		starOutlineColor: 'transparent',
		starOutlineWidth: '0px'
	}
};
