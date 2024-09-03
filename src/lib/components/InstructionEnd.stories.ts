import type { Meta, StoryObj } from '@storybook/svelte';
import InstructionEnd from './InstructionEnd.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Instruction/InstructionEnd',
	component: InstructionEnd,
	tags: ['autodocs']
} satisfies Meta<InstructionEnd>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
