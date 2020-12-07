import React from 'react';
import styled from 'styled-components';
import { useSocket } from '../hooks/useSocket';
import AppHeader from './AppHeader';
import Game from './game/Game';

const App: React.FC = () => {
  const socket = useSocket();

  return (
    <StyledWrap>
      <AppHeader />
      <StyledMain>
        <Game socket={socket} />
      </StyledMain>
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
