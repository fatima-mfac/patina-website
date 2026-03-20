import type { Meta, StoryObj } from '@storybook/react';
import { ArrowForward } from './ArrowForward';

const meta: Meta<typeof ArrowForward> = {
  title: 'Icons/ArrowForward',
  component: ArrowForward,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof ArrowForward>;

export const Default: Story = {};

export const OnDark: Story = {
  decorators: [
    (Story) => (
      <div style={{ background: 'var(--color-background-dark)', padding: '16px', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
  args: { style: { color: 'var(--color-text-on-dark)' } },
};
