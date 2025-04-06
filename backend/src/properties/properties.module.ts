import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Property } from './properties.model';

@Module({
  providers: [PropertiesService],
  controllers: [PropertiesController],
  imports: [SequelizeModule.forFeature([Property])]
})
export class PropertiesModule {}
