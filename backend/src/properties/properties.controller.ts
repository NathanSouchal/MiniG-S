import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { Property } from './properties.model';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';


@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

    @Get()
    findAll(): Promise<Property[]> {
        return this.propertiesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Property> {
        return this.propertiesService.findOne(id);
    }

    @Post()
    create(@Body() dto: CreatePropertyDto): Promise<Property> {
        return this.propertiesService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() @Body() dto: UpdatePropertyDto): Promise<[number]> {
        return this.propertiesService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.propertiesService.delete(id);
    }
}
