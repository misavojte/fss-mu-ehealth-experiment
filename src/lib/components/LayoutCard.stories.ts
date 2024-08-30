import type { Meta, StoryObj } from '@storybook/svelte';
import LayoutCard from './LayoutCard.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Layout/LayoutCard',
	component: LayoutCard,
	tags: ['autodocs']
} satisfies Meta<LayoutCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
