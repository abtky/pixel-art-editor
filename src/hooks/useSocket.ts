import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const getSocket = (): SocketIOClient.Socket => {
  const isDevelop: boolean = process.env.NODE_ENV === 'development';
  const host = isDevelop ? 'localhost:8000' : window.location.host;
  return io(host);
};
const webSocket = getSocket();
export const useSocket = (): SocketIOClient.Socket => {
  const [socket] = useState(webSocket);
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);
  return socket;
};
