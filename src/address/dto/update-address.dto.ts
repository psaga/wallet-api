import { IsBoolean } from 'class-validator';

export class UpdateAddressDto {
  @IsBoolean()
  readonly isFavorite: boolean;
}
