import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesModule } from './properties/properties.module';
import { Property } from './properties/properties.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './database.sqlite',
      autoLoadModels: true,
      synchronize: true,
      models: [Property],
    }),
    PropertiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
