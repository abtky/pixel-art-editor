import io from 'socket.io-client';
import { useEffect, useState } from 'react';

type ErrorCallBack = (e: Error) => void;

type State = {
  socket: SocketIOClient.Socket;
  onDisconnect: (callBack: ErrorCallBack) => void;
};
const getSocket = (): SocketIOClient.Socket => {
  const isDevelop: boolean = process.env.NODE_ENV === 'development';
  const host = isDevelop ? 'localhost:8000' : window.location.host;
  return io(host);
};
const webSocket = getSocket();
export const useSocket = (): State => {
  const [socket] = useState(webSocket);
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  const onDisconnect = (callBack: ErrorCallBack): void => {
    // const failEvents = ['disconnect', 'connect_error', 'connect_failed'];
    const failEvents = ['connect_error', 'connect_failed'];
    failEvents.forEach((eventName: string) => {
      socket.on(eventName, (e: Error) => {
        socket.disconnect();
        callBack(e);
      });
    });
  };

  return { socket, onDisconnect };
};
