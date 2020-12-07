import React from 'react';

export type Props = {
  socket: SocketIOClient.Socket;
};
const Entrance: React.FC<Props> = (props: Props) => {
  const { socket } = props;
  return <>Entrance{socket.id}</>;
};

export default Entrance;
