const translationList = [
  { roman: 'I', arabic: 1 },
  { roman: 'IV', arabic: 4 },
  { roman: 'V', arabic: 5 },
  { roman: 'IX', arabic: 10 },
  { roman: 'X', arabic: 10 },
  { roman: 'L', arabic: 50 },
  { roman: 'C', arabic: 100 },
  { roman: 'D', arabic: 500 },
  { roman: 'M', arabic: 1000 },
  { roman: 'V*', arabic: 5000 },
].reverse();

// 83 = LXXXIII
// 4879 = MMMMDCCCLXXIX
let numberToTranslate = 9876; // IX*DCCC

const reduceRoman = (number) => {
  const biggerItem = translationList.find((item) => item.arabic <= number);

  console.log('REDUCE', number, biggerItem);
  return { delta: biggerItem.arabic, romans: biggerItem.roman };
};

const translateToRoman = (number) => {
  let symbols = '';
  while (number > 0) {
    const { delta, romans } = reduceRoman(number);
    symbols += romans;
    number -= delta;
  }
  return symbols;
};

const result = translateToRoman(numberToTranslate);
console.log(result);
