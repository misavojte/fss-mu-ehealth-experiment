import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentL2Slide from './ExperimentL2Slide.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentL2Slide',
	component: ExperimentL2Slide,
	tags: ['autodocs'],
	argTypes: {
		primaryColor: {
			control: 'color'
		}
	}
} satisfies Meta<ExperimentL2Slide>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		id: '1',
		name: 'MUDr. Eva Nováková',
		rating: 4.3,
		reviewCount: 70,
		reviews: [
			{
				id: '1',
				title: 'A. K.',
				rating: 5,
				review:
					'Doktorka je velmi příjemná a ochotná. Vždy se snaží poradit a pomoci. Vřele doporučuji.'
			},
			{
				id: '2',
				title: 'R. T.',
				rating: 4,
				review: 'Doktorka je trpělivá a vždy se snaží poradit. Jsem s ní velmi spokojená.'
			},
			{
				id: '3',
				title: 'E. N.',
				rating: 2,
				review: 'Doktorka je neochotná a nepříjemná. Nedoporučuji.'
			}
		]
	}
};
