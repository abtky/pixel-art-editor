import { useState, useEffect } from 'react';
import { Player } from '../interfaces';

type JoinedServerMessage = {
  players: Player[];
};
type State = {
  players: Player[];
  register: (name: string) => Promise<Player[]>;
};
export const usePlayerList = (socket: SocketIOClient.Socket): State => {
  const [players, setPlayers] = useState<Player[]>([]);
  /*
  useEffect(() => {
    console.log(players);
  }, [players]);
  */
  const register = (name: string): Promise<Player[]> => {
    return new Promise((resolve) => {
      const params = JSON.stringify({ name });
      console.log('register');
      socket.on('joined', (serverMessage: JoinedServerMessage) => {
        setPlayers(serverMessage.players);
        socket.off('joined');
        console.log('register.resolve', serverMessage.players);
        resolve(players);
      });
      socket.emit('join', params);
    });
  };
  return { players, register };
};
