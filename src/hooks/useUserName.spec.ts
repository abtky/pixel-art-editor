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
    const input = 'S案p1e';
    const expected = 'SP1E';
    const { result } = renderHook(() => useUserName(maxLength));
    act(() => {
      result.current.set(input);
    });
    expect(result.current.name).toBe(expected);
  });
});
