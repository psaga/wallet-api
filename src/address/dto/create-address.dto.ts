import { IsBoolean, IsNotEmpty, Length } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @Length(42)
  readonly account: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly isOld: boolean;
}
