import { useEffect, useState } from 'react';
import { BoardSize, GridData, SocketApi } from '../interfaces';

type GameDataResponse = {
  size: BoardSize;
  grids: GridData[];
};

type ReturnType = {
  grids: GridData[];
  cols: number;
  rows: number;
  handleClickGrid: (index: number) => void;
};
export const useGameData = (socket: SocketIOClient.Socket): ReturnType => {
  const [grids, setGrids] = useState<GridData[]>([]);
  const [boardSize, setBoardSize] = useState<BoardSize>({ cols: 0, rows: 0 });

  const updateGrid = (jsonString: string) => {
    const grid = JSON.parse(jsonString);
    if (grids && grids[grid.index]) {
      grids[grid.index] = grid;
      setGrids(grids.concat());
    }
  };
  useEffect(() => {
    socket.off(SocketApi.GAME_FILL);
    socket.on(SocketApi.GAME_FILL, (message: string) => {
      updateGrid(message);
    });
  }, [grids]);

  useEffect(() => {
    socket.on('game-data', (res: GameDataResponse) => {
      socket.off('game-data');
      setBoardSize(res.size);
      setGrids(res.grids);
    });
    socket.emit('request-game-data');
    return () => {
      socket.off('game-data');
      socket.off(SocketApi.GAME_FILL);
      socket.disconnect();
    };
  }, []);

  const handleClickGrid = (index: number) => {
    socket.emit(SocketApi.GAME_FILL, { gridIndex: index });
  };

  const state = {
    grids,
    cols: boardSize?.cols || 0,
    rows: boardSize?.rows || 0,
    handleClickGrid,
  };

  return state;
};
