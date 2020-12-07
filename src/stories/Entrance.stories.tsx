import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyle } from '../style';
import Entrance, { Props } from '../components/entrance/Entrance';
import { useSocket } from '../hooks/useSocket';

export default {
  title: 'Entrance',
  component: Entrance,
} as Meta;

const Template: Story<Props> = (args: Props) => {
  const socket = useSocket();
  return (
    <>
      <GlobalStyle />
      <Entrance socket={socket} />
    </>
  );
};
export const Normal = Template.bind({});
