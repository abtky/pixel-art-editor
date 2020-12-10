export enum SocketStatus {
  UNKNOWN,
  SUCCESS,
  ERROR,
}
export type GridData = {
  index: number;
  color: string;
};
export type GameData = {
  cols: number;
  rows: number;
  grids: GridData[];
};
export type Player = {
  id: string;
  color: string;
};
