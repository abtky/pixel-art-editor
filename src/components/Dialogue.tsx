import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';

type Props = {
  children: React.ReactNode;
};
const Dialogue: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <StyledWrapper>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  );
};
export default Dialogue;

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
  width: min(90vw, 480px);
  height: 320px;
  background-color: ${cssVars.colorBackground};
  border: 1px solid ${cssVars.colorText};
  box-shadow: 4px 4px 0 0 ${cssVars.colorText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
