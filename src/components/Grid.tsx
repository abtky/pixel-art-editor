import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';

export type Props = {
  index: number;
  color: string;
  isActive: boolean;
  onClickGrid: (index: number) => void;
};
const Grid: React.FC<Props> = (props: Props) => {
  const { color, index, onClickGrid, isActive } = props;
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isActive) {
      onClickGrid(index);
    }
  };
  const handleClick = () => {
    onClickGrid(index);
  };

  return (
    <StyledDiv>
      <StyledInner
        color={color}
        onClick={handleClick}
        onMouseEnter={handleMouseMove}
      />
    </StyledDiv>
  );
};
export default Grid;
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  border: solid 1px;
  position: relative;
  border-color: ${cssVars.embossShadow} ${cssVars.embossLight}
    ${cssVars.embossLight} ${cssVars.embossShadow};
  box-sizing: border-box;
`;
const StyledInner = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.color};
`;
