export const useColors = (cols: number, rows: number): string[] => {
  const createColors = (c: number, r: number): string[] => {
    const length = c * r;
    return new Array(length).fill('').map((val, i) => {
      const hue = Math.floor(((i % c) / c) * 360);
      const lightness = 100 - Math.ceil((i + 1) / c) * rows;
      return `hsl(${hue}, 100%, ${lightness}%)`;
    });
  };
  const createGrayScales = (c: number): string[] => {
    return new Array(c).fill('').map((v, i) => {
      const scale = 1 - i / c;
      const value = Math.floor(scale * 0xff);
      return `rgba(${value},${value},${value},1.0)`;
    });
  };
  const colors = createColors(cols, rows);
  const grayScales = createGrayScales(cols);
  return grayScales.concat(colors);
};
