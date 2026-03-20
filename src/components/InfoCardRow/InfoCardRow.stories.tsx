import type { Meta, StoryObj } from '@storybook/react';
import { InfoCardRow } from './InfoCardRow';

const CARDS = [
  { title: 'Screen time awareness', subtitle: 'Watch your day unfold in color.' },
  { title: 'No app required', subtitle: 'Works as your live wallpaper, always on.' },
  { title: 'Four tint stages', subtitle: 'Neutral, yellow, orange, red.' },
  { title: 'Open source', subtitle: 'Built in the open. Free forever.' },
];

const meta: Meta<typeof InfoCardRow> = {
  title: 'Components/InfoCardRow',
  component: InfoCardRow,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof InfoCardRow>;

export const Default: Story = {
  args: { cards: CARDS },
  decorators: [(Story) => <div style={{ padding: '40px' }}><Story /></div>],
};

export const Mobile: Story = {
  args: { cards: CARDS },
  parameters: { viewport: { defaultViewport: 'mobile1' } },
  decorators: [(Story) => <div style={{ padding: '16px' }}><Story /></div>],
};
