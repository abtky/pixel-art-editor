import React, { useState } from 'react';
import styled from 'styled-components';
import { GridData, Player } from '../../interfaces';
import { cssVars } from '../../style';
import Grid from './Grid';
import PlayersIndicator from './PlayersIndicator';

export type Props = {
  cols: number;
  rows: number;
  grids: GridData[];
  yourInfo: Player;
  players: Player[];
  onClickGrid: (index: number) => void;
};
const Board: React.FC<Props> = (props: Props) => {
  const { rows, cols, grids, players, yourInfo } = props;
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleClick = (data: GridData) => {
    props.onClickGrid(data.index);
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
      onTouchStart={handleMouseDown}
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
      <PlayersIndicator
        cols={cols}
        rows={rows}
        yourInfo={yourInfo}
        players={players}
      />
    </StyledContainer>
  );
};
export default Board;
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  --width: max(
    calc(100vw - ${cssVars.layoutSidebarMinWidth}),
    calc(100vw - ${cssVars.layoutSidebarWidth})
  );
  --height: calc(100vh - ${cssVars.layoutHeaderHeight});
  --size: min(var(--width), var(--height));
  width: var(--size);
  height: var(--size);
  padding: 4px;
  border: solid 1px;
  border-color: ${cssVars.embossLight} ${cssVars.embossShadow}
    ${cssVars.embossShadow} ${cssVars.embossLight};
  margin: 0 auto;
  user-select: none;
  box-sizing: border-box;
  ${cssVars.mediaQueryMobile} {
    --size: calc(100vw - 32px);
    padding: 2px;
    margin: 16px;
  }
  position: relative;
`;

const StyledGrid = styled.div<{ cols: number; rows: number }>`
  overflow: hidden;
  box-sizing: border-box;
  padding: 1px;
  ${(props) => `
        width: calc((100% - 1px) / ${props.cols});
        height: calc((100% - 1px) / ${props.rows});
    `}
  ${cssVars.mediaQueryMobile} {
    padding: 0;
  }
`;
