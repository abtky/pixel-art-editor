import React, { useState } from 'react';
import styled from 'styled-components';
import { cssVars } from '../style';

const cols = 10;
const rows = 10;
const createColors = (c: number, r: number): string[] => {
  const length = c * r;
  return new Array(length).fill('').map((val, i) => {
    const hue = Math.floor(((i % c) / c) * 360);
    const lightness = 100 - Math.floor(i / c) * rows;
    return `hsl(${hue}, 100%, ${lightness}%)`;
  });
};
const colors: string[] = createColors(cols, rows);

const ColorPalette: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[index]);
  const handleClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
    setSelectedColor(colors[clickedIndex]);
  };
  return (
    <div>
      <StyledTitle>COLOR</StyledTitle>
      <StyledContainer>
        {colors.map((color, i) => {
          return (
            <StyledGrid
              cols={cols}
              color={color}
              selected={i === index}
              onClick={() => {
                handleClick(i);
              }}
            />
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
  color: string;
  selected: boolean;
}>`
  height: 20px;
  position: relative;
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: solid 2px white;
    box-sizing: border-box;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2) inset;
  }
  ${(props) => `
    width: calc(100% / ${props.cols});
    background-color: ${props.color};
    ${props.selected ? `&::after { content: '' }` : ''}
  `}
`;
