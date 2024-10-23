import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentL2Doctor from './ExperimentL2Doctor.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentL2Doctor',
	component: ExperimentL2Doctor,
	tags: ['autodocs']
} satisfies Meta<ExperimentL2Doctor>;

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
				title: 'A. K.',
				rating: 5,
				review:
					'Doktorka je velmi příjemná a ochotná. Vždy se snaží poradit a pomoci. Vřele doporučuji.'
			},
			{
				title: 'R. T.',
				rating: 4,
				review: 'Doktorka je trpělivá a vždy se snaží poradit. Jsem s ní velmi spokojená.'
			},
			{
				title: 'E. N.',
				rating: 2,
				review: 'Doktorka je neochotná a nepříjemná. Nedoporučuji.'
			}
		]
	}
};
