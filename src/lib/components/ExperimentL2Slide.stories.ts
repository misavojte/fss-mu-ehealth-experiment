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
				id: '8_a',
				rating: 5,
				review:
					'Paní doktorka Kučerová mi zjistila ledvinové kameny a doporučila efektivní léčbu. Díky ní jsem se vyhnul operaci. Je opravdu profesionál a ví, jak nejlépe pomoct. Moc děkuji! ',
				title: 'I.K.'
			},
			{
				id: '8_b',
				rating: 5,
				review:
					'Paní doktorka byla moc empatická, moji maminku trpělivě vyslechla a všechno jí srozumitelně vysvětlila. Maminka se u ní cítila dobře a já jsem klidná, že je konečně v dobrých rukou.',
				title: 'J.V.'
			},
			{
				id: '8_c',
				rating: 4,
				review:
					'V ordinaci paní doktorky je vždy čisto a klid. Návštěvy probíhají bez problémů, ale občas mi chybí trochu víc přátelské atmosféry. Jinak všechno v pořádku, prostě praktický lékař.',
				title: 'M.Š.'
			}
		]
	}
};
