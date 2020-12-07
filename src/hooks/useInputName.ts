import { useState } from 'react';

type State = {
  nameArray: string[];
  addLetter: (letter: string) => void;
};
export const useInputName = (maxLength: number): State => {
  const [value, setValue] = useState<string[]>('ABCD'.split(''));
  const addLetter = (letter: string) => {
    const pattern = /[0-9a-z]/;
    if (letter.match(pattern)) {
      const newValue = value.concat([letter]);
      setValue(newValue.slice(0, maxLength));
    }
  };
  return {
    nameArray: value,
    addLetter,
  };
};
