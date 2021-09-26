import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarModel } from './car.model';

@Injectable()
export class CarService {
    constructor(
        @InjectModel('CarModel')
        private carModel: Model<Car>,
      ) {}

    async findAll(): Promise<Car[]> {
        return this.carModel.find().lean();
    }

    async findOne(id: string): Promise<Car> {
        return await this.carModel.findOne({ carId: id });
    }
  
}
