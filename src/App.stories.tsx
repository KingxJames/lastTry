// App.stories.tsx

import  { App } from './App'; // Make sure to use PascalCase for component names


export default {
  title: 'App/App', // PascalCase for storybook title
  component: App,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

type Story = {
};

export const AppPage: Story = {
  
};