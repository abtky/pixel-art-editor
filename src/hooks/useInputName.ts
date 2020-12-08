import { useState, useEffect } from 'react';

type State = {
  nameArray: string[];
  addLetter: (letter: string) => void;
};
export const useInputName = (maxLength: number): State => {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    document.onkeydown = (e: KeyboardEvent) => {
      addLetter(e.key.toUpperCase());
    };
    return () => {
      document.onkeydown = null;
    };
  }, []);
  const addLetter = (letter: string) => {
    const isAlphaNumeric = /^[0-9A-Z]$/;
    if (letter.match(isAlphaNumeric)) {
      while (value.length >= maxLength) {
        value.pop();
      }
      value.push(letter);
      setValue([...value]);
    }
  };
  const clearValue = () => {
    setValue([]);
  };

  return {
    nameArray: value,
    addLetter,
    clearValue,
  };
};
