import { renderHook, act } from '@testing-library/react-hooks';
import { useUserName } from './useUserName';

describe('useUserName', () => {
  const maxLength = 8;

  it('set: 名前を設定', () => {
    const input = 'SAMPLE';
    const expected = 'SAMPLE';
    const { result } = renderHook(() => useUserName(maxLength));
    act(() => {
      result.current.set(input);
    });
    expect(result.current.name).toBe(expected);
  });
  it('set: 名前を設定: 小文字は大文字に変換される', () => {
    const input = 'Sample';
    const expected = 'SAMPLE';
    const { result } = renderHook(() => useUserName(maxLength));
    act(() => {
      result.current.set(input);
    });
    expect(result.current.name).toBe(expected);
  });
  it('set: 名前を設定: 英数字以外は除外される', () => {
    const input = 'S案p1*)_e';
    const expected = 'SP1E';
    const { result } = renderHook(() => useUserName(maxLength));
    act(() => {
      result.current.set(input);
    });
    expect(result.current.name).toBe(expected);
  });
  it('pop: 名前の文字を末尾から一文字削除', () => {
    const expected = 'SAMPL';
    const { result } = renderHook(() => useUserName(maxLength, 'SAMPLE'));
    act(() => {
      result.current.pop();
    });
    expect(result.current.name).toBe(expected);
  });
  it('append: 名前の末尾に文字を追加', () => {
    const input = 'e2';
    const expected = 'SAMPLEE2';
    const { result } = renderHook(() => useUserName(maxLength, 'SAMPLE'));
    act(() => {
      result.current.append(input);
    });
    expect(result.current.name).toBe(expected);
  });
  it('append: 英数字以外は除外される', () => {
    const input = 'e$2';
    const expected = 'SAMPLEE2';
    const { result } = renderHook(() => useUserName(maxLength, 'SAMPLE'));
    act(() => {
      result.current.append(input);
    });
    expect(result.current.name).toBe(expected);
  });
  it('clear: 値を空にする', () => {
    const expected = '';
    const { result } = renderHook(() => useUserName(maxLength, 'SAMPLE'));
    act(() => {
      result.current.clear();
    });
    expect(result.current.name).toBe(expected);
  });
});
