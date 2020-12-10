import { useState, useEffect } from 'react';
import { Player } from '../interfaces';

type JoinedServerMessage = {
  players: Player[];
};
export const usePlayerList = (socket: SocketIOClient.Socket) => {
  const [players, setPlayers] = useState<Player[]>([]);
  useEffect(() => {
    socket.on('joined', (serverMessage: JoinedServerMessage) => {
      console.log(serverMessage);
      setPlayers(serverMessage.players);
    });
    return () => {
      socket.off('joined');
    };
  }, []);

  const register = (name: string) => {
    const params = JSON.stringify({ name });
    socket.emit('join', params);
  };
  return { players, register };
};
