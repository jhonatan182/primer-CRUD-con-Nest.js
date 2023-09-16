import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    brand: 'Toyota',
    model: 'Corolla',
    id: uuid(),
  },
  {
    brand: 'Honda',
    model: 'Civic',
    id: uuid(),
  },
  {
    brand: 'Tesla',
    model: 'Model 3',
    id: uuid(),
  },
  {
    brand: 'Kia',
    model: 'Pikanto',
    id: uuid(),
  },
];
