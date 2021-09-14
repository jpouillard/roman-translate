import { Injectable } from '@nestjs/common';
import { TRANSLATIONS_TO_ROMAN } from './config/constants';
import { RomanFormat } from './interfaces/roman-format.interface';

@Injectable()
export class AppService {
  translateToRoman(arabic: number): string {
    let symbols = '';
    while (arabic > 0) {
      const { delta, romans } = this.findNearestRoman(arabic);
      symbols += romans;
      arabic -= delta;
    }
    return symbols;
  }

  translateToRomanWithSteps(arabic: number): Array<RomanFormat> {
    const steps = [];
    while (arabic > 0) {
      const { delta, romans } = this.findNearestRoman(arabic);
      steps.push({ delta, romans });
      arabic -= delta;
    }
    return steps;
  }

  private reduceThousands(number: number): RomanFormat {
    const howManyThousands = Math.floor(number / 1000);
    const symbols = this.translateToRoman(howManyThousands);
    const thousandsLength = number.toString().length - 3;
    let thousandStars = '';
    for (let i = 0; i < thousandsLength; i++) thousandStars += '*';
    return { delta: 1000 * howManyThousands, romans: symbols + thousandStars };
  }

  private findNearestRoman(number): RomanFormat {
    if (number >= 5000) return this.reduceThousands(number);
    const biggerItem = TRANSLATIONS_TO_ROMAN.find(
      (item) => item.arabic <= number,
    );
    return { delta: biggerItem.arabic, romans: biggerItem.roman };
  }
}
