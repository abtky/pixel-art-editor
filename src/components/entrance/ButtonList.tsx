import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../../style';

const ButtonList: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledButton primary={false}>CLEAR</StyledButton>
      <StyledButton primary>OK</StyledButton>
    </StyledWrapper>
  );
};

export default ButtonList;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button<{ primary: boolean }>`
  appearance: none;
  width: 72px;
  height: 24px;
  ${(props) => {
    const lineColor = props.primary
      ? cssVars.colorBackground
      : cssVars.colorText;
    const fillColor = props.primary
      ? cssVars.colorText
      : cssVars.colorBackground;
    return `
        color: ${lineColor};
        border-color: ${lineColor};
        background-color: ${fillColor};
    `;
  }}
  font-family: ${cssVars.fontFamily};
  font-size: ${cssVars.fontSize_S};
  border-style: solid;
  border-width: 1px;
  box-sizing: content-box;
  box-shadow: 2px 2px 0 0 ${cssVars.colorText};
  margin: 0 8px;
  cursor: pointer;
  outline: none;
  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;
