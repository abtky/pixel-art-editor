import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyle } from '../style';
import Entrance from '../components/entrance/Entrance';
import { SocketStatus } from '../interfaces';

export default {
  title: 'Entrance',
  component: Entrance,
} as Meta;

type Props = {
  status: SocketStatus;
};
const Template: Story<Props> = (args: Props) => {
  const handleDecideName = (name: string) => {
    console.log('handleDecideName', name);
  };
  return (
    <>
      <GlobalStyle />
      <Entrance onDecideName={handleDecideName} status={args.status} />
    </>
  );
};
export const Normal = Template.bind({});
Normal.args = {
  status: SocketStatus.UNKNOWN,
};
