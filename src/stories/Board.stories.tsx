import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyle } from '../style';
import Board, { Props } from '../components/game/Board';

export default {
  title: 'Board',
  component: Board,
} as Meta;

const playerMock = {
  id: '',
  name: 'you',
  color: 'white',
};
const Template: Story<Props> = (args: Props) => {
  const createGrids = (c: number, r: number) => {
    const length = c * r;
    return new Array(length).fill({}).map((item, index) => {
      return {
        index,
        color: Math.random() > 0.9 ? 'white' : 'transparent',
      };
    });
  };

  return (
    <>
      <GlobalStyle />
      <Board
        cols={args.cols}
        rows={args.rows}
        players={[]}
        yourInfo={playerMock}
        onClickGrid={() => {
          console.log('onClickGrid');
        }}
        grids={createGrids(args.cols, args.rows)}
      />
    </>
  );
};
export const Normal = Template.bind({});
const cols = 10;
const rows = 10;
Normal.args = {
  cols,
  rows,
  grids: [],
};
