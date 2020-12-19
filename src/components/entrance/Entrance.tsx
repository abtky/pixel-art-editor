import React, { useEffect } from 'react';
import styled from 'styled-components';
import { cssVars } from '../../style';
import Dialogue from '../Dialogue';
import ButtonList from './ButtonList';
import InputName from './InputName';
import { useUserName } from '../../hooks/useUserName';

type Props = {
  onDecideName: (name: string) => void;
};
const Entrance: React.FC<Props> = (props: Props) => {
  const maxLength = 8;
  const { name, set, clear, pop, append } = useUserName(maxLength);
  const handleClickClear = () => {
    clear();
  };
  const handleClickExecute = () => {
    if (!name) {
      const alternativeValue = 'UNKNOWN';
      set(alternativeValue);
      props.onDecideName(alternativeValue);
      return;
    }
    props.onDecideName(name);
  };

  useEffect(() => {
    document.onkeydown = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        append(e.key.toUpperCase());
      }
      switch (e.code.toLowerCase()) {
        case 'backspace':
          pop();
          break;
        default:
          break;
      }
    };
    return () => {
      document.onkeydown = null;
    };
  }, [name]);
  return (
    <Dialogue>
      <StyledTitle>ENTER YOUR NAME.</StyledTitle>
      <InputName name={name} maxLength={maxLength} />
      <ButtonList
        onClickClear={handleClickClear}
        onClickExecute={handleClickExecute}
      />
    </Dialogue>
  );
};

export default Entrance;

const StyledTitle = styled.h2`
  font-size: ${cssVars.fontSize_M};
`;
