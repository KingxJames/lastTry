// Sidebar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'components/Sidebar', 
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
  args: {
   
  },
};