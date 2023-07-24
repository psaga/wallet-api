import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class UpdateExchangeRateDto {
  @IsNotEmpty()
  @IsString()
  @Length(3)
  readonly currency: string;

  @IsNotEmpty()
  @IsNumber()
  readonly rate: number;
}
