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
  const { color, index, onClickGrid } = props;
  const handleClick = () => {
    onClickGrid(index);
  };
  return (
    <StyledDiv>
      <StyledInner color={color} onClick={handleClick} />
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
