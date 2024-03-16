import type { Meta, StoryObj } from '@storybook/react';

import { ExternalLink } from './external-link.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ui-kit/ExternalLink',
  component: ExternalLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  //
  argTypes: {
    openInNewTab: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ExternalLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    href: 'https://github.com',
    children: 'GitHub',
  },
};

export const DoNotOpenInNewTab: Story = {
  args: {
    href: 'https://github.com',
    openInNewTab: false,
    children: 'GitHub',
  },
};
