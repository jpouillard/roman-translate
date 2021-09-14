import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { StepsResponse } from './interfaces/steps-reponse.interface';
import { TranslateResponse } from './interfaces/translate-reponse.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('translate/roman/steps')
  translateToRomanWithSteps(@Query('arabic') arabic: number): StepsResponse {
    const steps = this.appService.translateToRomanWithSteps(arabic);
    return { arabic, steps };
  }

  @Get('translate/roman')
  translateToRoman(@Query('arabic') arabic: number): TranslateResponse {
    const roman = this.appService.translateToRoman(arabic);
    return { arabic, roman };
  }
}
