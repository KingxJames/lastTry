// ColorSchemeToggle.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { ColorSchemeToggle } from './ColorSchemeToggle';

const meta: Meta<typeof ColorSchemeToggle> = {
  title: 'components/ColorSchemeToggle', 
  component: ColorSchemeToggle,
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