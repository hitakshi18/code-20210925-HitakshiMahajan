import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule} from './car/car.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ GraphQLModule.forRoot({
        autoSchemaFile: 'schema.gql'
      }), CarModule,  MongooseModule.forRoot('mongodb+srv://carDealer:carDealer@carscatalogcluster.q6pwh.mongodb.net/Cars?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
