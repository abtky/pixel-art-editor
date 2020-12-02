import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyle } from '../style';
import Board, { Props } from '../components/Board';

export default {
  title: 'Board',
  component: Board,
  argTypes: {
    cols: { control: 'number', defaultValue: 16 },
    rows: { control: 'number', defaultValue: 16 },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => (
  <>
    <GlobalStyle />
    <Board cols={args.cols} rows={args.rows} />
  </>
);
export const Normal = Template.bind({});
