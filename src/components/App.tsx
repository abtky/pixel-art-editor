import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSocket } from '../hooks/useSocket';
import { usePlayerList } from '../hooks/usePlayerList';
import AppHeader from './AppHeader';
import Game from './game/Game';
import Entrance from './entrance/Entrance';
import { SocketStatus } from '../interfaces';

const App: React.FC = () => {
  const socket = useSocket();
  const [initialized] = useState(false);
  const { players, register } = usePlayerList(socket);
  const handleDecideName = (name: string) => {
    console.log('handleDecideName', name);
    register(name);
  };

  useEffect(() => {
    console.log('useEffect.players', players);
  }, [players]);

  const renderMain = () => {
    if (players.length > 0) {
      return <Game socket={socket} players={players} />;
    }
    return (
      <Entrance onDecideName={handleDecideName} status={SocketStatus.UNKNOWN} />
    );
  };

  return (
    <StyledWrap>
      <AppHeader />
      <StyledMain>{renderMain()}</StyledMain>
    </StyledWrap>
  );
};
export default App;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1 1 100%;
`;
