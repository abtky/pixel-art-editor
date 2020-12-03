import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ColorPalette from './ColorPalette';

type Props = {
  onChangeColor: (color: string) => void;
};
const SideBar: React.FC<Props> = (props: Props) => {
  const { onChangeColor } = props;
  return (
    <StyledNav>
      <ColorPalette onChangeColor={onChangeColor} cols={12} rows={10} />
    </StyledNav>
  );
};
export default SideBar;

const StyledNav = styled.nav``;
