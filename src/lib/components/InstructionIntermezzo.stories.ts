import type { Meta, StoryObj } from '@storybook/svelte';
import InstructionIntermezzo from './InstructionIntermezzo.svelte';

import { setLocale } from '../../i18n/i18n-svelte';
import { loadLocale } from '../../i18n/i18n-util.sync';

loadLocale('cs');
setLocale('cs');

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Instruction/InstructionIntermezzo',
	component: InstructionIntermezzo,
	tags: ['autodocs']
} satisfies Meta<InstructionIntermezzo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {}
};
