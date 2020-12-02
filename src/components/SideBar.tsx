import React from 'react';
import styled from 'styled-components';
import ColorPalette from './ColorPalette';

const SideBar: React.FC = () => {
  return (
    <StyledNav>
      <ColorPalette />
    </StyledNav>
  );
};
export default SideBar;

const StyledNav = styled.nav``;
