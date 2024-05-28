// DashboardBox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { DashboardBox } from './DashboardBox';


const meta: Meta<typeof DashboardBox> = {
  title: 'components/DashboardBox', 
  component: DashboardBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
    args: {
    //   icon: User,
    //   title: "User",
    //   description: "blue"
    },
  };