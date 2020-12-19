import React from 'react';
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
  onChangeColor: (newColor: string) => void;
};
const Game: React.FC<Props> = (props: Props) => {
  const { socket, yourInfo, players, onChangeColor } = props;
  const { grids, cols, rows, handleClickGrid } = useGameData(socket);
  return (
    <StyledMain>
      <StyledBoardContainer>
        <Board
          onClickGrid={(index: number) => {
            handleClickGrid(index);
          }}
          cols={cols}
          rows={rows}
          grids={grids}
          yourInfo={yourInfo}
          players={players}
        />
      </StyledBoardContainer>
      <StyledSideBarContainer>
        <ColorPalette onChangeColor={onChangeColor} cols={12} rows={10} />
        <PlayerList yourInfo={yourInfo} players={players} />
      </StyledSideBarContainer>
    </StyledMain>
  );
};
export default Game;

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
  ${cssVars.mediaQueryMobile} {
    display: block;
  }
`;

const StyledBoardContainer = styled.div`
  flex: 1;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  ${cssVars.mediaQueryMobile} {
    border-bottom: ${cssVars.borderStyle} 4px;
  }
`;
const StyledSideBarContainer = styled.div`
  width: min(${cssVars.layoutSidebarWidth}, ${cssVars.layoutSidebarMinWidth});
  border-left: ${cssVars.border};
  ${cssVars.mediaQueryMobile} {
    border: none;
    width: 100%;
    height: calc(100% - 100vw);
    overflow: hidden;
    display: flex;
    flex-direction: row;
  }
`;
