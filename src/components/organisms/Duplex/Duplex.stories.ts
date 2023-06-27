import type { Meta, StoryObj } from '@storybook/react';

import Duplex from '.';
import { mock } from './Duplex.mock';

const meta: Meta<typeof Duplex> = {
  title: 'Organisms/Duplex',
  component: Duplex,
  tags: ['autodocs'],
  args: { ...mock },
};

export default meta;
type Story = StoryObj<typeof Duplex>;

export const Default: Story = {
  args: {},
};
