import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../../style';
import { useInputName } from '../../hooks/useInputName';

type Props = {
  maxLength: number;
};

const InputName: React.FC<Props> = (props: Props) => {
  const { maxLength } = props;
  const { nameArray, addLetter } = useInputName(maxLength);
  console.log({ nameArray });
  return (
    <StyledContainer>
      {nameArray.map((letter) => {
        return <StyledLetter>{letter}</StyledLetter>;
      })}
    </StyledContainer>
  );
};
export default InputName;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 32px;
`;

const StyledLetter = styled.div`
  width: 24px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid;
  font-size: ${cssVars.fontSize_L};
  margin: 0 2px;
`;
