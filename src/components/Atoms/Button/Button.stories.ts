import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'radio',
      options: ['Orange', 'White'],
    },
    size: {
      control: 'radio',
      options: ['Small', 'Regular', 'Big'],
    },
    style: {
      control: 'radio',
      options: ['Solid', 'Outline'],
    },
    children: {
      control: 'text',
      name: 'text',
    },
  },
  args: {
    color: 'Orange',
    size: 'Regular',
    style: 'Solid',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AsSpan: Story = {
  args: {
    children: 'Button',
  },
};

export const AsLink: Story = {
  args: {
    children: 'Button',
    url: '/test',
  },
};

export const AsButton: Story = {
  args: {
    children: 'Button',
    onClick: () => {
      alert('Click');
    },
  },
};
