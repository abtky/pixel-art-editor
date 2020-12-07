import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../../style';
import ButtonList from './ButtonList';

type Props = {
  socket: SocketIOClient.Socket;
};
const Entrance: React.FC<Props> = (props: Props) => {
  const { socket } = props;
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledTitle>ENTER YOUR NAME.</StyledTitle>E ntrance{socket.id}
        <ButtonList />
      </StyledContent>
    </StyledWrapper>
  );
};

export default Entrance;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  width: 480px;
  height: 320px;
  background-color: ${cssVars.colorBackground};
  border: 1px solid ${cssVars.colorText};
  box-shadow: 4px 4px 0 0 ${cssVars.colorText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-size: ${cssVars.fontSize_M};
  margin-bottom: 1em;
`;
