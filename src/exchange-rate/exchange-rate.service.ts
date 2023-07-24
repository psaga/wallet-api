import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExchangeRate } from './exchange-rate.entity';
import { UpdateExchangeRateDto } from './dto/update-exchange-rate.dto';

@Injectable()
export class ExchangeRateService {
  constructor(
    @InjectRepository(ExchangeRate)
    private readonly exchangeRateRepository: Repository<ExchangeRate>,
  ) {}

  async update(id: number, updateExchangeRateDto: UpdateExchangeRateDto) {
    const toUpdate = await this.exchangeRateRepository.findOneBy({
      id,
    });
    const updated = Object.assign(toUpdate, updateExchangeRateDto);
    return await this.exchangeRateRepository.save(updated);
  }

  async findAll(): Promise<ExchangeRate[]> {
    return await this.exchangeRateRepository.find();
  }
}
