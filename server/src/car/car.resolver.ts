import { Resolver, Query } from '@nestjs/graphql';
import { Car } from './car.model';
import { CarService }  from './car.service';

@Resolver(() => Car)
export class CarResolver {
    constructor(private readonly carService: CarService) {}
    
    @Query(( ) => [Car])
    async carsList()  {
        return this.carService.findAll();
    }

}