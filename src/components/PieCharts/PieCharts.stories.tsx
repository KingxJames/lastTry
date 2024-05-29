// PieCharts.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { PieCharts } from './PieCharts';


const meta: Meta<typeof PieCharts> = {
  title: 'components/PieCharts', 
  component: PieCharts,
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