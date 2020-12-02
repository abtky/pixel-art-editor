export const useColors = (cols: number, rows: number): string[] => {
  const createColors = (c: number, r: number): string[] => {
    const length = c * r;
    return new Array(length).fill('').map((val, i) => {
      const hue = Math.floor(((i % c) / c) * 360);
      const lightness = 100 - Math.floor(i / c) * rows;
      return `hsl(${hue}, 100%, ${lightness}%)`;
    });
  };
  return createColors(cols, rows);
};
