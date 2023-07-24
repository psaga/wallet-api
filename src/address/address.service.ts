import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateAddressDto, UpdateAddressDto } from './dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    const newAddress = new Address();
    newAddress.account = createAddressDto.account;
    newAddress.isOld = createAddressDto.isOld;
    return await this.addressRepository.save(newAddress);
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    const toUpdate = await this.addressRepository.findOneBy({
      id,
    });
    const updated = Object.assign(toUpdate, updateAddressDto);

    return await this.addressRepository.save(updated);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.addressRepository.delete({ id });
  }

  async find(addressAcount: string): Promise<Address> {
    return await this.addressRepository.findOne({
      where: { account: addressAcount },
    });
  }

  async findAll(): Promise<Address[]> {
    return await this.addressRepository.find();
  }
}
