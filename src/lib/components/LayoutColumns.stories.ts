import type { Meta, StoryObj } from '@storybook/svelte';
import LayoutColumns from './LayoutColumns.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Layout/LayoutColumns',
	component: LayoutColumns,
	tags: ['autodocs']
} satisfies Meta<LayoutColumns>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
