import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyle } from '../style';
import Game from '../components/game/Game';
import { useSocket } from '../hooks/useSocket';

export default {
  title: 'Game',
  component: Game,
} as Meta;

const Template: Story = () => {
  const socket = useSocket();
  const players = [
    {
      id: '01',
      name: 'SampleUser',
      color: 'white',
    },
    {
      id: '02',
      name: 'NewUser',
      color: 'white',
    },
  ];
  return (
    <>
      <GlobalStyle />
      <Game yourInfo={players[0]} socket={socket} players={players} />
    </>
  );
};
export const Normal = Template.bind({});
