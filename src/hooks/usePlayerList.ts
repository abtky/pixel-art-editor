import { useState, useEffect } from 'react';
import { Player } from '../interfaces';

type JoinedServerMessage = {
  newPlayer: Player;
  players: Player[];
};
type State = {
  yourInfo: Player | undefined;
  players: Player[];
  register: (name: string) => Promise<Player>;
};
export const usePlayerList = (socket: SocketIOClient.Socket): State => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [yourInfo, setYourInfo] = useState<Player>();
  const register = (name: string): Promise<Player> => {
    return new Promise((resolve) => {
      const params = JSON.stringify({ name });
      socket.on('joined', (serverMessage: JoinedServerMessage) => {
        console.log('joined', serverMessage);
        setPlayers(serverMessage.players);
        setYourInfo(serverMessage.newPlayer);
        socket.off('joined');
        resolve(serverMessage.newPlayer);
      });
      socket.emit('join', params);
    });
  };
  return { yourInfo, players, register };
};
