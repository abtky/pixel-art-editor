import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import SideBar from './SideBar';
import { cssVars } from '../../style';
import { useGameData } from '../../hooks/useGameData';

type Props = {
  socket: SocketIOClient.Socket;
};
const Game: React.FC<Props> = (props: Props) => {
  const { socket } = props;
  const [color, setColor] = useState('gold');
  const { grids, cols, rows, handleClickGrid } = useGameData(socket);
  const handleChangeColor = (newColor: string) => {
    setColor(newColor);
  };
  return (
    <>
      <StyledBoardContainer>
        <Board
          onClickGrid={(index: number) => {
            handleClickGrid(index, color);
          }}
          cols={cols}
          rows={rows}
          grids={grids}
        />
      </StyledBoardContainer>
      <StyledSideBarContainer>
        <SideBar onChangeColor={handleChangeColor} />
      </StyledSideBarContainer>
    </>
  );
};
export default Game;

const StyledBoardContainer = styled.div`
  flex: 1;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSideBarContainer = styled.div`
  width: min(${cssVars.layoutSidebarWidth}, ${cssVars.layoutSidebarMinWidth});
  border-left: ${cssVars.border};
`;
