import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuidv4(),
      ...createBrandDto,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    };

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with uuid ${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
          id,
          updatedAt: new Date().getTime(),
        };

        return brandDB;
      }

      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    const brand = this.findOne(id);

    this.brands = this.brands.filter(
      (brandState) => brandState.id === brand.id,
    );

    return `Brand with id: ${id} has been removed}`;
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
