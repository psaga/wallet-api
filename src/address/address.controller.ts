import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from './address.entity';
import { CreateAddressDto, UpdateAddressDto } from './dto';
import { DeleteResult } from 'typeorm';

@Controller('addresses')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto): Promise<Address> {
    return this.addressService.create(createAddressDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    return this.addressService.update(id, updateAddressDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.addressService.delete(id);
  }

  @Get(':addressAccount')
  find(@Param('addressAccount') addressAccount: string): Promise<Address> {
    return this.addressService.find(addressAccount);
  }

  @Get()
  findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }
}
