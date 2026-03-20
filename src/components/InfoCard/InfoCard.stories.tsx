import type { Meta, StoryObj } from '@storybook/react';
import { InfoCard } from './InfoCard';

const meta: Meta<typeof InfoCard> = {
  title: 'Components/InfoCard',
  component: InfoCard,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    title: 'Screen time awareness',
    subtitle: 'See how much time you spend on your phone each day.',
  },
  decorators: [(Story) => <div style={{ width: '260px' }}><Story /></div>],
};

export const TitleOnly: Story = {
  args: { title: 'No app required' },
  decorators: [(Story) => <div style={{ width: '260px' }}><Story /></div>],
};

export const Clickable: Story = {
  args: {
    title: 'Screen time awareness',
    subtitle: 'See how much time you spend on your phone each day.',
    onClick: () => alert('clicked'),
  },
  decorators: [(Story) => <div style={{ width: '260px' }}><Story /></div>],
};
