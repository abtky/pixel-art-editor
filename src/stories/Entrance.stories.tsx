import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyle } from '../style';
import Entrance from '../components/entrance/Entrance';

export default {
  title: 'Entrance',
  component: Entrance,
} as Meta;

const Template: Story = () => {
  const handleDecideName = (name: string) => {
    console.log('handleDecideName', name);
  };
  return (
    <>
      <GlobalStyle />
      <Entrance onDecideName={handleDecideName} />
    </>
  );
};
export const Normal = Template.bind({});
