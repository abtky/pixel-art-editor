import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';
import Dialogue from './Dialogue';

const ErrorDialogue: React.FC = () => {
  return (
    <Dialogue>
      <StyledContent>
        Sorry.. <br />
        something went wrong.
      </StyledContent>
    </Dialogue>
  );
};
export default ErrorDialogue;

const StyledContent = styled.div`
  font-size: ${cssVars.fontSize_M};
`;
