export const PORT = process.env.PORT || 3000;

export const TRANSLATIONS_TO_ROMAN = [
  { roman: 'I', arabic: 1 },
  { roman: 'IV', arabic: 4 },
  { roman: 'V', arabic: 5 },
  { roman: 'IX', arabic: 9 },
  { roman: 'X', arabic: 10 },
  { roman: 'L', arabic: 50 },
  { roman: 'XC', arabic: 90 },
  { roman: 'C', arabic: 100 },
  { roman: 'D', arabic: 500 },
  { roman: 'CM', arabic: 900 },
  { roman: 'M', arabic: 1000 },
].reverse();
