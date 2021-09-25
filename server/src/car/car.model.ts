import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

export const CarsSchema = new mongoose.Schema({
    carId: String,
    carPrice: Number,
    carMake: String,
    carModel: String
})

@ObjectType()
export class Cars {
    @Field()
    carId: string;

    @Field()
    carPrice: number;

    @Field()
    carMake: string;

    @Field()
    carModel: string;

}