import { useEffect, useState } from 'react';
import { GameData, GridData } from '../interfaces';

type ReturnType = {
  grids: GridData[];
  cols: number;
  rows: number;
  handleClickGrid: (index: number, color: string) => void;
};
export const useGameData = (socket: SocketIOClient.Socket): ReturnType => {
  const [gameData, setGameData] = useState<GameData>();

  const updateGrid = (jsonString: string) => {
    const grid = JSON.parse(jsonString);
    const grids = gameData?.grids;

    if (grids && grids[grid.index]) {
      grids[grid.index] = grid;
      const newData: GameData = {
        ...gameData,
        grids: grids.concat(),
      } as GameData;

      setGameData(newData);
    }
  };
  useEffect(() => {
    socket.off('color');
    socket.on('color', (message: string) => {
      updateGrid(message);
    });
  }, [gameData]);

  useEffect(() => {
    socket.on('game-data', (serverMessage: string) => {
      socket.off('game-data');
      const initialGameData = JSON.parse(serverMessage);
      setGameData(initialGameData);
    });
    socket.emit('request-game-data');
    return () => {
      socket.off('game-data');
      socket.off('color');
      socket.disconnect();
    };
  }, []);

  const handleClickGrid = (index: number, color: string) => {
    const params = JSON.stringify({ index, color });
    socket.emit('color', params);
  };

  const state = {
    grids: gameData?.grids || [],
    cols: gameData?.cols || 0,
    rows: gameData?.rows || 0,
    handleClickGrid,
  };

  return state;
};
