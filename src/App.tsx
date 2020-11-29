import React from 'react';
import io from 'socket.io-client';

const getSocket = (): SocketIOClient.Socket => {
  const isDevelop: boolean = process.env.NODE_ENV === 'development';
  const host = isDevelop ? 'localhost:8000' : window.location.host;
  console.log({ host });
  return io(host);
};
const socket = getSocket();
// socket.emit('connection', 'message from client');
socket.on('init', (serverMessage: string) => {
  socket.off('init');
  const initialGameData = JSON.parse(serverMessage);
  console.log(initialGameData);
});
socket.open();
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
      </header>
    </div>
  );
};
export default App;
