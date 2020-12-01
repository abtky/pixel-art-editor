import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyle } from '../style';
import AppHeader from '../components/AppHeader';

export default {
  title: 'AppHeader',
  component: AppHeader,
} as Meta;

const Template: Story = () => (
  <>
    <GlobalStyle />
    <AppHeader />
  </>
);
export const Normal = Template.bind({});
