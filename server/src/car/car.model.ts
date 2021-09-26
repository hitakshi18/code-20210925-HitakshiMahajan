import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

export const CarModel = new mongoose.Schema({
    carId: String,
    carPrice: Number,
    carMake: String,
    carModel: String,
    carImageUrl: String,
    carDescription: String
})

@ObjectType()
export class Car {
    @Field()
    carId: string;

    @Field( { nullable: true })
    carPrice: number;

    @Field( { nullable: true })
    carMake: string;

    @Field( { nullable: true })
    carModel: string;

    @Field( { nullable: true })
    carImageUrl: string

    @Field( { nullable: true })
    carDescription: string

}