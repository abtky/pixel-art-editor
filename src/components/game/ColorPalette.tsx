import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useColors } from '../../hooks/useColors';
import ColorPaletteGrid from './ColorPaletteGrid';
import SideBarContent from './SideBarContent';

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
    <SideBarContent title="Color">
      <StyledContent>
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
      </StyledContent>
    </SideBarContent>
  );
};
export default ColorPalette;

const StyledContent = styled.div`
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
