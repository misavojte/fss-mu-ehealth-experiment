import type { Meta, StoryObj } from '@storybook/svelte';
import LayoutDynamicComponent from './LayoutDynamicComponent.svelte';
import ExperimentRatingDistribution from './ExperimentRatingDistribution.svelte';
import type { SvelteComponent } from 'svelte';

const components: { id: string; component: SvelteComponent }[] = [
	{
		id: 'ExperimentRatingDistribution',
		component: new ExperimentRatingDistribution({ target: document.body })
	}
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Layout/LayoutDynamicComponent',
	component: LayoutDynamicComponent,
	tags: ['autodocs'],
	argTypes: {
		// forbidden control for components arguement
		components: { table: { disable: true } }
	}
} satisfies Meta<LayoutDynamicComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		components,
		activeId: 'ExperimentRatingDistribution'
	}
};
