import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';

const Grid: React.FC = () => {
  return <StyledDiv />;
};
export default Grid;
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px;
  border-color: ${cssVars.embossShadow} ${cssVars.embossLight}
    ${cssVars.embossLight} ${cssVars.embossShadow};
`;
