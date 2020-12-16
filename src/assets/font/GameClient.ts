const getSocket = (): SocketIOClient.Socket => {
  const isDevelop: boolean = process.env.NODE_ENV === 'development';
  const host = isDevelop ? 'localhost:8000' : window.location.host;
  return io(host);
};

export class GameClient {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = getSocket();
  }
}
