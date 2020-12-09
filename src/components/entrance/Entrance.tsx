import React from 'react';
import styled from 'styled-components';
import { cssVars } from '../../style';
import ButtonList from './ButtonList';
import InputName from './InputName';
import { useInputName } from '../../hooks/useInputName';

type Props = {
  onDecideName: (name: string) => void;
};
const Entrance: React.FC<Props> = (props: Props) => {
  const maxLength = 8;
  const { nameArray, setName, clearValue } = useInputName(maxLength);
  const handleClickClear = () => {
    clearValue();
  };
  const handleClickExecute = () => {
    if (nameArray.length < 1) {
      setName('UNKNOWN');
    }
    props.onDecideName(nameArray.join(''));
  };
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledTitle>ENTER YOUR NAME.</StyledTitle>
        <InputName nameArray={nameArray} maxLength={maxLength} />
        <ButtonList
          onClickClear={handleClickClear}
          onClickExecute={handleClickExecute}
        />
      </StyledContent>
    </StyledWrapper>
  );
};

export default Entrance;

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContent = styled.div`
  width: 480px;
  height: 320px;
  background-color: ${cssVars.colorBackground};
  border: 1px solid ${cssVars.colorText};
  box-shadow: 4px 4px 0 0 ${cssVars.colorText};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-size: ${cssVars.fontSize_M};
`;
