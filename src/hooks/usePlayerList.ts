import { useState, useEffect } from 'react';
import { Player } from '../interfaces';
export const usePlayerList = (socket: SocketIOClient.Socket) => {
  const [players, setPlayers] = useState<Player[]>();
  useEffect(() => {
    socket.on('joined', (serverMessage: string) => {
      console.log(serverMessage);
    });
    return () => {
      socket.off('joined');
    };
  }, []);

  const register = (name: string) => {
    const params = JSON.stringify({ name });
    console.log(params);
    socket.emit('register', params);
  };
  return { players, register };
};
