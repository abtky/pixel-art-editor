import React, { useEffect } from 'react';
import styled from 'styled-components';
import { cssVars } from '../../style';
import Dialogue from '../Dialogue';
import ButtonList from './ButtonList';
import InputName from './InputName';
import { useUserName } from '../../hooks/useUserName';
import { SocketStatus } from '../../interfaces';

type Props = {
  status: SocketStatus;
  onDecideName: (name: string) => void;
};
const Entrance: React.FC<Props> = (props: Props) => {
  const maxLength = 8;
  const { status } = props;
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
