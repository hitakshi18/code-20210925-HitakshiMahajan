import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModel } from './car.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'CarModel', schema: CarModel }])],
  providers: [CarService, CarResolver]
})
export class CarModule {}

