import { useState, useEffect } from 'react';

type State = {
  nameArray: string[];
  set: (name: string) => void;
  clear: () => void;
  append: (letter: string) => void;
};
export const useUserName = (maxLength: number): State => {
  const [value, setValue] = useState<string[]>([]);

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
    value.pop();
    setValue([...value]);
  };
  const append = (letter: string) => {
    const isAlphaNumeric = /^[0-9A-Z]$/;
    if (letter.match(isAlphaNumeric)) {
      while (value.length >= maxLength) {
        value.pop();
      }
      value.push(letter);
      setValue([...value]);
    }
  };
  const set = (name: string) => {
    clear();
    name.split('').forEach((v) => {
      append(v);
    });
  };
  const clear = () => {
    while (value.length) {
      value.pop();
    }
    setValue([...value]);
  };

  return {
    nameArray: value,
    set,
    clear,
    append,
  };
};
