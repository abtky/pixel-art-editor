import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../../style';

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
  border-width: 1px;
  border-color: ${cssVars.colorBackground};
  border-style: solid none none solid;
  box-sizing: border-box;
`;

const StyledBorder = styled.div<{ opacity: number }>`
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  position: absolute;
  top: 1px;
  left: 1px;
  background-color: transparent;
  border: solid white 2px;
  box-shadow: 0 0 0 1px ${cssVars.colorBackground} inset;
  opacity: ${(props) => props.opacity};
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
`;
