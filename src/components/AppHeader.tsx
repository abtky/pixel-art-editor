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
  height: ${cssVars.layoutHeaderHeight};
  display: flex;
  align-items: center;
  padding: 0 ${cssVars.fontSize_M};
  border-bottom: ${cssVars.border};
  background-color: #1a1826;
  ${cssVars.mediaQueryMobile} {
    height: 32px;
    justify-content: center;
  }
`;

const StyledTitle = styled.h1`
  font-size: ${cssVars.fontSize_L};
  height: 1em;
  transform: translateY(3px);
  overflow: hidden;
  ${cssVars.mediaQueryMobile} {
    transform: translateY(2px);
    font-size: ${cssVars.fontSize_M};
  }
`;
