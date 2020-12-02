import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';

const AppHeader: React.FC = () => {
  return (
    <StyledHeader>
      <StyledTitle>PIXEL_ART_EDITOR</StyledTitle>
    </StyledHeader>
  );
};

export default AppHeader;
const StyledHeader = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: ${cssVars.fontSize_M};
  border-bottom: ${cssVars.border};
  background-color: #1a1826;
`;

const StyledTitle = styled.h1`
  font-size: ${cssVars.fontSize_L};
  height: 1em;
  transform: translateY(3px);
  overflow: hidden;
`;
