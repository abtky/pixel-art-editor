import React from 'react';
import styled from 'styled-components';
import { useSocket } from '../hooks/useSocket';
import { useGameData } from '../hooks/useGameData';
import AppHeader from './AppHeader';
import Board from './Board';
import SideBar from './SideBar';
import { cssVars } from '../style';

const App: React.FC = () => {
  const socket = useSocket();
  const { grids, cols, rows, handleClickGrid } = useGameData(socket);

  return (
    <>
      <AppHeader />
      <StyledMain>
        <StyledBoardContainer>
          <Board
            onClickGrid={handleClickGrid}
            cols={cols}
            rows={rows}
            grids={grids}
          />
        </StyledBoardContainer>
        <StyledSideBarContainer>
          <SideBar />
        </StyledSideBarContainer>
      </StyledMain>
    </>
  );
};
export default App;

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
`;

const StyledBoardContainer = styled.div`
  flex: 1;
  object-fit: contain;
`;
const StyledSideBarContainer = styled.div`
  width: 320px;
  border-left: ${cssVars.border};
`;
