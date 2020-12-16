import { useState } from 'react';

type State = {
  name: string;
  set: (name: string) => void;
  clear: () => void;
  pop: () => void;
  append: (letter: string) => void;
};
export const useUserName = (maxLength: number, defaultName = ''): State => {
  const [value, setValue] = useState<string>(defaultName.toUpperCase());

  /**
   * 一文字削除
   */
  const pop = () => {
    const newValue = value.substr(0, value.length - 1);
    set(newValue);
  };

  /**
   * 末尾に文字を追加
   * @param letter
   */
  const append = (letter: string) => {
    const newValue = value.substr(0, maxLength - 1) + letter;
    set(newValue);
  };

  /**
   * 名前を設定
   * @param name
   */
  const set = (name: string) => {
    setValue(sanitize(name).toUpperCase());
  };

  /**
   * 文字列の無害化（英数字のみ）
   * @param name
   */
  const sanitize = (name: string): string => {
    const isAlphaNumeric = /^[0-9A-Za-z]$/;
    const sanitized = name.split('').filter((letter) => {
      return letter.match(isAlphaNumeric);
    });
    return sanitized.join('');
  };

  const clear = () => {
    setValue('');
  };

  return {
    name: value,
    set,
    clear,
    append,
    pop,
  };
};
