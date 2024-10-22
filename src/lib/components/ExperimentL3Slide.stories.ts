import type { Meta, StoryObj } from '@storybook/svelte';
import ExperimentL3Slide from './ExperimentL3Slide.svelte';
import { setLocale } from '../../i18n/i18n-svelte';
import { loadLocale } from '../../i18n/i18n-util.sync';

loadLocale('cs');
setLocale('cs');

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Experiment/ExperimentL3Slide',
	component: ExperimentL3Slide,
	tags: ['autodocs'],
	argTypes: {
		primaryColor: {
			control: 'color'
		}
	}
} satisfies Meta<ExperimentL3Slide>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		id: '1',
		name: 'MUDr. Eva Nováková',
		rating: 4.3,
		reviewCount: 70,
		type: 'good',
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
