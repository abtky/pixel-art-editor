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

  const updateGrid = (grid: GridData) => {
    if (grids && grids[grid.index]) {
      grids[grid.index] = grid;
      setGrids(grids.concat());
    }
  };
  useEffect(() => {
    socket.on(SocketApi.GAME_FILL, (grid: GridData) => {
      updateGrid(grid);
    });
    return () => {
      socket.off(SocketApi.GAME_FILL);
    };
  }, [grids]);

  useEffect(() => {
    socket.once(SocketApi.GAME_INFO, (res: GameDataResponse) => {
      setBoardSize(res.size);
      setGrids(res.grids);
    });
    socket.emit(SocketApi.GAME_INFO);
    return () => {
      socket.off(SocketApi.GAME_INFO);
      socket.disconnect();
    };
  }, []);

  const handleClickGrid = (index: number) => {
    socket.emit(SocketApi.GAME_FILL, { gridIndex: index });
  };

  const state = {
    grids,
    cols: boardSize.cols,
    rows: boardSize.rows,
    handleClickGrid,
  };

  return state;
};
