import React from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

const getSocket = (): SocketIOClient.Socket => {
  // const isDevelop: boolean = process.env.NODE_ENV === 'development';
  // const host = isDevelop ? 'localhost:8000' : window.location.host;
  const host = window.location.host;
  return io(host);
};
const socket = getSocket();
socket.open();
socket.emit('connection', 'message from client');
console.log('connection', socket);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
