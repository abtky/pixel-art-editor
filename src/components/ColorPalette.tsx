import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';
import { useColors } from '../hooks/useColors';
import ColorPaletteGrid from './ColorPaletteGrid';

type Props = {
  cols: number;
  rows: number;
  onChangeColor: (color: string) => void;
};
const ColorPalette: React.FC<Props> = (props: Props) => {
  const [index, setIndex] = useState(0);
  const handleClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
    onChangeColor(colors[clickedIndex]);
  };
  const { cols, rows, onChangeColor } = props;
  useEffect(() => {
    onChangeColor(colors[index]);
  }, []);

  const colors: string[] = useColors(cols, rows);
  return (
    <div>
      <StyledTitle>COLOR</StyledTitle>
      <StyledContainer>
        {colors.map((color, i) => {
          return (
            <StyledGrid cols={cols} key={color}>
              <ColorPaletteGrid
                color={color}
                index={i}
                isSelected={i === index}
                onClickGrid={handleClick}
              />
            </StyledGrid>
          );
        })}
      </StyledContainer>
    </div>
  );
};
export default ColorPalette;

const StyledTitle = styled.h2`
  border-bottom: ${cssVars.border};
  height: 32px;
  font-size: ${cssVars.fontSize_S};
  display: flex;
  align-items: center;
  background-color: #331d33;
  padding-left: ${cssVars.fontSize_S};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
`;

const StyledGrid = styled.div<{
  cols: number;
}>`
  width: ${(props) => `calc(100% / ${props.cols})`};
  height: 20px;
  position: relative;
  border-color: white;
  border-width: 2px;
  box-sizing: border-box;
`;
