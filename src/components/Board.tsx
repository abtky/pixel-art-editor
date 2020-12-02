import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GameData } from '../interfaces';
import { cssVars } from '../style';
import Grid from './Grid';

export type Props = GameData;
const Board: React.FC<Props> = (props: Props) => {
  const { rows, cols, grids } = props;
  return (
    <StyledContainer>
      {grids.map((data) => (
        <StyledGrid cols={cols} rows={rows} key={data.index}>
          <Grid {...data} />
        </StyledGrid>
      ))}
    </StyledContainer>
  );
};
export default Board;
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  --size: min(100vw, 100vh);
  width: var(--size);
  height: var(--size);
  padding: 4px;
  border: solid 1px;
  border-color: ${cssVars.embossLight} ${cssVars.embossShadow}
    ${cssVars.embossShadow} ${cssVars.embossLight};
  margin: 0 auto;
  user-select: none;
  box-sizing: border-box;
`;

interface StyledGridProps {
  cols: number;
  rows: number;
}
const StyledGrid = styled.div<StyledGridProps>`
  border-width: 1px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 1px;
  ${(props) => `
        width: calc((100% - 1px) / ${props.cols});
        height: calc((100% - 1px) / ${props.rows});
    `}
`;
