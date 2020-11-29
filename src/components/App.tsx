import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useSocket } from '../hooks/useSocket';
import { useGameData } from '../hooks/useGameData';
import { GridData } from '../interfaces';

const App: React.FC = () => {
  const socket = useSocket();
  const { grids, cols, rows, handleClickGrid } = useGameData(socket);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          grids: {grids.length}
          <code>src/App.tsx</code>
          and save to reload.
        </p>
      </header>
    </div>
  );
};
export default App;
