import { useState, useEffect } from 'react';

type State = {
  name: string;
  set: (name: string) => void;
  clear: () => void;
  append: (letter: string) => void;
};
export const useUserName = (maxLength: number): State => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    document.onkeydown = (e: KeyboardEvent) => {
      switch (e.code.toLowerCase()) {
        case 'backspace':
          pop();
          return;
        default:
          append(e.key.toUpperCase());
      }
    };
    return () => {
      document.onkeydown = null;
    };
  }, [value]);

  const pop = () => {
    const newValue = value.substr(0, value.length - 1);

    setValue(newValue);
  };
  const append = (letter: string) => {
    const isAlphaNumeric = /^[0-9A-Z]$/;
    if (letter.match(isAlphaNumeric)) {
      const newValue = value.substr(0, maxLength - 1) + letter;
      setValue(newValue);
    }
  };
  const set = (name: string) => {
    clear();
    name.split('').forEach((v) => {
      append(v);
    });
  };
  const clear = () => {
    setValue('');
  };

  return {
    name: value,
    set,
    clear,
    append,
  };
};
