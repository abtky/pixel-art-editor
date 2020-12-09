import { useState, useEffect } from 'react';

type State = {
  nameArray: string[];
  setName: (name: string) => void;
  clearValue: () => void;
  addLetter: (letter: string) => void;
};
export const useInputName = (maxLength: number): State => {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    document.onkeydown = (e: KeyboardEvent) => {
      switch (e.code.toLowerCase()) {
        case 'backspace':
          popLetter();
          return;
        default:
          addLetter(e.key.toUpperCase());
      }
    };
    return () => {
      document.onkeydown = null;
    };
  }, [value]);
  const popLetter = () => {
    value.pop();
    setValue([...value]);
  };
  const addLetter = (letter: string) => {
    const isAlphaNumeric = /^[0-9A-Z]$/;
    console.log('addLetter', value);
    if (letter.match(isAlphaNumeric)) {
      while (value.length >= maxLength) {
        value.pop();
      }
      value.push(letter);
      setValue([...value]);
    }
  };
  const setName = (name: string) => {
    clearValue();
    name.split('').forEach((v) => {
      addLetter(v);
    });
  };
  const clearValue = () => {
    while (value.length) {
      value.pop();
    }
    console.log('clearValue', value);
    setValue([...value]);
  };

  return {
    nameArray: value,
    setName,
    clearValue,
    addLetter,
  };
};
