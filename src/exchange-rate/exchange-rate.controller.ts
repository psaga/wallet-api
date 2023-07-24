import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRate } from './exchange-rate.entity';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';

@Controller('exchange-rates')
export class ExchangeRateController {
  constructor(private readonly rateService: ExchangeRateService) {}

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateExchangeRateDto: UpdateExchangeRateDto,
  ): Promise<ExchangeRate> {
    return this.rateService.update(id, updateExchangeRateDto);
  }

  @Get()
  findAll(): Promise<ExchangeRate[]> {
    return this.rateService.findAll();
  }
}
