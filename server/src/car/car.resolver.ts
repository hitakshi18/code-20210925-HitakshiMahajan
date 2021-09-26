import { Resolver, Query, Args } from '@nestjs/graphql';
import { Car } from './car.model';
import { CarService }  from './car.service';

@Resolver(() => Car)
export class CarResolver {
    constructor(private readonly carService: CarService) {}
    
    @Query((returns) => [Car])
    async carsList()  {
        return this.carService.findAll();
    }

    @Query((returns) => Car)
    async getCarById(@Args('id') id: string) {
      return id ? this.carService.findOne(id) : 'Invalid Data input for getCarById';
    }

}