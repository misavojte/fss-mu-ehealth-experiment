import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentSlide from './ExperimentL1Slide.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentSlide',
	component: ExperimentSlide,
	tags: ['autodocs'],
	argTypes: {
		starBackgroundColor: { control: 'color' },
		starFillColor: { control: 'color' },
		starOutlineColor: { control: 'color' }
	}
} satisfies Meta<ExperimentSlide>;

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

export const GoldenStars: Story = {
	args: {
		pictureBase: 'stimuli',
		pictureId: 'p_00a_f',
		picureExtension: 'png',
		pictureCorrection: 0.15,
		starFillColor: 'gold',
		starOutlineWidth: '0px',
		starBackgroundColor: '#f0f0f0'
	}
};
