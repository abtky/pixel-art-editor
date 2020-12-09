import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { cssVars } from '../../style';

type Props = {
  maxLength: number;
  nameArray: string[];
};

const InputName: React.FC<Props> = (props: Props) => {
  const { maxLength, nameArray } = props;
  const isCurrent = (index: number): boolean => {
    if (index === nameArray.length) {
      return true;
    }
    return nameArray.length === maxLength && index === maxLength - 1;
  };
  return (
    <StyledContainer>
      <StyledLetterContainer>
        {nameArray.map((letter, i) => {
          // eslint-disable-next-line react/no-array-index-key
          return <StyledLetter key={i}>{letter}</StyledLetter>;
        })}
      </StyledLetterContainer>
      <StyledCursorContainer>
        {new Array(maxLength).fill('').map((v, i) => {
          // eslint-disable-next-line react/no-array-index-key
          return <StyledCursor key={i} current={isCurrent(i)} />;
        })}
      </StyledCursorContainer>
    </StyledContainer>
  );
};
export default InputName;

const girdWidth = '24px';
const girdMargin = '2px';

const StyledContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
`;

const StyledCursorContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const blinkCursor = () =>
  keyframes`
    0% { opacity: 0 }
    50% { opacity: 1 }
    100% { opacity: 1 }
  `;
const animation = () => css`
  animation: ${blinkCursor()} 0.5s steps(1) infinite;
`;
const StyledCursor = styled.div<{ current: boolean }>`
  width: ${girdWidth};
  height: 2px;
  background-color: ${cssVars.colorText};
  margin: 0 ${girdMargin};
  ${(props) => (props.current ? animation() : '')}
`;

const StyledLetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
`;

const StyledLetter = styled.div`
  width: ${girdWidth};
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${cssVars.fontSize_L};
  margin: 0 ${girdMargin};
`;
