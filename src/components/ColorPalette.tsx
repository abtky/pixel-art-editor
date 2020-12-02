import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';
import { useColors } from '../hooks/useColors';
import ColorPaletteGrid from './ColorPaletteGrid';

const ColorPalette: React.FC = () => {
  const [index, setIndex] = useState(0);
  const handleClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };
  const [cols] = useState(10);
  const [rows] = useState(10);

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
