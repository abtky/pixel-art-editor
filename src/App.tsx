import React from 'react';
import io from 'socket.io-client';

const getSocket = (): SocketIOClient.Socket => {
  // const isDevelop: boolean = process.env.NODE_ENV === 'development';
  // const host = isDevelop ? 'localhost:8000' : window.location.host;
  const { host } = window.location;
  return io(host);
};
const socket = getSocket();
socket.open();
socket.emit('connection', 'message from client');

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
