import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './Board';
import { cssVars } from '../../style';
import { useGameData } from '../../hooks/useGameData';
import { Player } from '../../interfaces';
import ColorPalette from './ColorPalette';
import PlayerList from './PlayerList';

type Props = {
  socket: SocketIOClient.Socket;
  yourInfo: Player;
  players: Player[];
};
const Game: React.FC<Props> = (props: Props) => {
  const { socket, yourInfo, players } = props;
  const [color, setColor] = useState('gold');
  const { grids, cols, rows, handleClickGrid } = useGameData(socket);
  const handleChangeColor = (newColor: string) => {
    setColor(newColor);
  };
  return (
    <StyledMain>
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
        <ColorPalette onChangeColor={handleChangeColor} cols={12} rows={10} />
        <PlayerList yourInfo={yourInfo} players={players} />
      </StyledSideBarContainer>
    </StyledMain>
  );
};
export default Game;

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
`;

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
