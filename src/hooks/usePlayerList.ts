import { useState, useEffect } from 'react';
import { Player, SocketApi } from '../interfaces';

type State = {
  yourInfo: Player | undefined;
  players: Player[];
  update: (props: { [key: string]: string | number }) => void;
  create: (name: string) => void;
};
export const usePlayerList = (socket: SocketIOClient.Socket): State => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [yourInfo, setYourInfo] = useState<Player>();

  useEffect(() => {
    socket.on(
      SocketApi.PLAYER_CREATE,
      (res: { you: Player; players: Player[] }) => {
        setYourInfo(res.you);
        socket.off(SocketApi.PLAYER_CREATE);
      }
    );
    socket.on(SocketApi.PLAYER_UPDATE, (res: { players: Player[] }) => {
      setPlayers(res.players);
    });
    return () => {
      socket.off(SocketApi.PLAYER_CREATE);
      socket.off(SocketApi.PLAYER_UPDATE);
    };
  }, []);

  const create = (name: string) => {
    socket.emit(SocketApi.PLAYER_CREATE, { name });
  };
  const update = (props: { [key: string]: string | number }) => {
    socket.emit(SocketApi.PLAYER_UPDATE, props);
  };

  return { yourInfo, players, create, update };
};
