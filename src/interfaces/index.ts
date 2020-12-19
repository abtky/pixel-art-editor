export type GridData = {
  index: number;
  color: string;
};
export type BoardSize = {
  cols: number;
  rows: number;
};
export type GameData = {
  cols: number;
  rows: number;
  grids: GridData[];
};
export type Player = {
  id: string;
  name: string;
  color: string;
  lastPaintedGrid?: GridData;
};

// eslint-disable-next-line no-shadow
export enum SocketApi {
  PLAYER_CREATE = 'Player:create',
  PLAYER_UPDATE = 'Player:update',
  PLAYER_DELETE = 'Player:delete',
  GAME_FILL = 'Game:fillGrid',
  GAME_INFO = 'Game:info',
}
