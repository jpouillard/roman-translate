const translationList = [
  { roman: 'I', arabic: 1 },
  { roman: 'IV', arabic: 4 },
  { roman: 'V', arabic: 5 },
  { roman: 'IX', arabic: 9 },
  { roman: 'X', arabic: 10 },
  { roman: 'L', arabic: 50 },
  { roman: 'XC', arabic: 90 },
  { roman: 'C', arabic: 100 },
  { roman: 'D', arabic: 500 },
  { roman: 'M', arabic: 1000 },
].reverse();

// 83 = LXXXIII
// 4879 = MMMMDCCCLXXIX
let numberToTranslate = 93874;

const reduceThousands = (number) => {
  const howManyThousands = Math.floor(number / 1000);
  const symbols = translateToRoman(howManyThousands);
  const thousandsLength = number.toString().length - 3;
  let thousandStars = '';
  for (let i = 0; i < thousandsLength; i++) thousandStars += '*';
  return { delta: 1000 * howManyThousands, romans: symbols + thousandStars };
};

const findNearestRoman = (number) => {
  if (number >= 5000) return reduceThousands(number);
  const biggerItem = translationList.find((item) => item.arabic <= number);
  return { delta: biggerItem.arabic, romans: biggerItem.roman };
};

const translateToRoman = (number) => {
  let symbols = '';
  while (number > 0) {
    const { delta, romans } = findNearestRoman(number);
    symbols += romans;
    number -= delta;
  }
  return symbols;
};

const result = translateToRoman(numberToTranslate);
console.log(`${numberToTranslate} = ${result}`);
