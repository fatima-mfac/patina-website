import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowForward } from '../ArrowForward/ArrowForward';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Get Android App',
    icon: <ArrowForward style={{ color: 'var(--color-text-on-dark)' }} />,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'iOS Waitlist',
    icon: <ArrowForward />,
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Continue',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Get Android App',
    icon: <ArrowForward style={{ color: 'var(--color-text-on-dark)' }} />,
    disabled: true,
  },
};

export const BothVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
      <Button variant="primary" icon={<ArrowForward style={{ color: 'var(--color-text-on-dark)' }} />}>
        Get Android App
      </Button>
      <Button variant="secondary" icon={<ArrowForward />}>
        iOS Waitlist
      </Button>
    </div>
  ),
};
