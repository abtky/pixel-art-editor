import { useState, useEffect } from 'react';
import { Player, SocketApi } from '../interfaces';

type State = {
  yourInfo: Player | undefined;
  players: Player[];
  update: (id: string, props: { [key: string]: string | number }) => void;
  create: (name: string) => void;
};
export const usePlayerList = (socket: SocketIOClient.Socket): State => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [yourInfo, setYourInfo] = useState<Player>();

  useEffect(() => {
    socket.on(
      SocketApi.PLAYER_CREATE,
      (res: { newPlayer: Player; players: Player[] }) => {
        setPlayers(res.players);
        setYourInfo(res.newPlayer);
        socket.off(SocketApi.PLAYER_CREATE);
      }
    );
    socket.on(SocketApi.PLAYER_UPDATE, (res: { players: Player[] }) => {
      console.log();
      setPlayers(res.players);
    });
    return () => {
      socket.off(SocketApi.PLAYER_CREATE);
      socket.off(SocketApi.PLAYER_UPDATE);
    };
  }, []);

  const create = (name: string) => {
    // const params = JSON.stringify({ name });
    socket.emit(SocketApi.PLAYER_CREATE, { name });
  };
  const update = (id: string, props: { [key: string]: string | number }) => {
    console.log('update', props);
    socket.emit(SocketApi.PLAYER_UPDATE, { id, props });
  };
  const remove = () => {
    console.log('remove');
  };

  return { yourInfo, players, create, update };
};
