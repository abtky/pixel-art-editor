import React, { useState } from 'react';
import styled from 'styled-components';
import { GameData, GridData } from '../interfaces';
import { cssVars } from '../style';
import Grid from './Grid';

export type Props = GameData & {
  onClickGrid: (index: number, color: string) => void;
};
const Board: React.FC<Props> = (props: Props) => {
  const { rows, cols, grids } = props;
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleClick = (data: GridData) => {
    const color = data.color !== 'white' ? 'white' : 'blue';
    props.onClickGrid(data.index, color);
  };
  const handleMouseDown = () => {
    if (!isMouseDown) {
      setIsMouseDown(true);
    }
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  return (
    <StyledContainer
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleMouseDown}
    >
      {grids.map((data) => (
        <StyledGrid cols={cols} rows={rows} key={data.index}>
          <Grid
            {...data}
            isActive={isMouseDown}
            onClickGrid={() => handleClick(data)}
          />
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

const StyledGrid = styled.div<{ cols: number; rows: number }>`
  border-width: 1px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 1px;
  ${(props) => `
        width: calc((100% - 1px) / ${props.cols});
        height: calc((100% - 1px) / ${props.rows});
    `}
`;
