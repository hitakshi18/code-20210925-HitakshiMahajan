import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule} from './car/car.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ GraphQLModule.forRoot({
        autoSchemaFile: 'schema.gql'
      }), CarModule,  MongooseModule.forRoot('mongodb://localhost/carsCatalog')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
