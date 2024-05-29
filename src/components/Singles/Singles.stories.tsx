// Singles.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Singles } from './Singles';


const meta: Meta<typeof Singles> = {
  title: 'components/Singles', 
  component: Singles,
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