import React, { useState } from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';
import Grid from './Grid';

export type Props = {
  cols: number;
  rows: number;
};
const Board: React.FC<Props> = (props: Props) => {
  const createGrid = () => {
    const { rows, cols } = props;
    const length = rows * cols;
    return new Array(length).fill(null).map((item, i) => ({ index: i }));
  };
  const [grids] = useState(createGrid());
  return (
    <StyledContainer>
      {grids.map((data) => (
        <StyledGrid cols={props.cols} rows={props.rows} key={data.index}>
          <Grid />
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
