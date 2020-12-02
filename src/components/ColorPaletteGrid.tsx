import React from 'react';
import styled from 'styled-components';

type Props = {
  index: number;
  color: string;
  isSelected: boolean;
  onClickGrid: (i: number) => void;
};
const ColorPaletteGrid: React.FC<Props> = (props: Props) => {
  const { index, color, isSelected, onClickGrid } = props;
  return (
    <>
      <StyledDiv color={color} onClick={() => onClickGrid(index)} />
      <StyledBorder opacity={isSelected ? 1 : 0} />
    </>
  );
};
export default ColorPaletteGrid;
const StyledDiv = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const StyledBorder = styled.div<{ opacity: number }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  border: solid white 2px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2) inset;
  opacity: ${(props) => props.opacity};
  pointer-events: none;
  box-sizing: border-box;
`;
