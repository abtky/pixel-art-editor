import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSocket } from '../hooks/useSocket';
import { usePlayerList } from '../hooks/usePlayerList';
import AppHeader from './AppHeader';
import Game from './game/Game';
import Entrance from './entrance/Entrance';
import { SocketStatus } from '../interfaces';
import ErrorDialogue from './ErrorDialogue';

const App: React.FC = () => {
  const { socket, onDisconnect } = useSocket();
  const { players, create, update, yourInfo } = usePlayerList(socket);
  const [hasError, setHasError] = useState(false);

  const handleDecideName = (name: string) => {
    create(name);
  };
  const handleChangeColor = (color: string) => {
    update({ color });
  };

  useEffect(() => {
    onDisconnect(() => {
      setHasError(true);
    });
  }, []);

  const renderMain = () => {
    if (hasError) {
      return <ErrorDialogue />;
    }
    if (yourInfo) {
      return (
        <Game
          socket={socket}
          onChangeColor={handleChangeColor}
          yourInfo={yourInfo}
          players={players}
        />
      );
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
  flex: 1 1 100%;
`;
