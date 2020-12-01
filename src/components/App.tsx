import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSocket } from '../hooks/useSocket';
import { useGameData } from '../hooks/useGameData';
import { GridData } from '../interfaces';
import AppHeader from './AppHeader';

const App: React.FC = () => {
  const socket = useSocket();
  const { grids, cols, rows, handleClickGrid } = useGameData(socket);

  return (
    <>
      <AppHeader />
      <StyledMain />
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
