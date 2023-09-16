import { v4 as uuidv4 } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update.car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id} not found'`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuidv4(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    //dont repet yourself

    let carDB = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    //dont repet yourself

    let carDB = this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== carDB.id);

    return `Car with id ${id} has been removed`;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
