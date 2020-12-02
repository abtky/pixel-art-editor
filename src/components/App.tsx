import React from 'react';
import styled from 'styled-components';
import { useSocket } from '../hooks/useSocket';
import { useGameData } from '../hooks/useGameData';
import AppHeader from './AppHeader';
import Board from './Board';

const App: React.FC = () => {
  const socket = useSocket();
  const { grids, cols, rows, handleClickGrid } = useGameData(socket);

  return (
    <>
      <AppHeader />
      <StyledMain>
        <Board cols={cols} rows={rows} />
      </StyledMain>
      <div className="App">
        <header className="App-header">
          <p>
            grids: {grids.length}
            <code>src/App.tsx</code>
            and save to reload.
          </p>
        </header>
      </div>
    </>
  );
};
export default App;

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
`;
