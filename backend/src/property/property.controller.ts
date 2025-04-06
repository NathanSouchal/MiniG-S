import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PropertyService } from './property.service';
import { Property } from './property.model';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';


@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

    @Get()
    findAll(): Promise<Property[]> {
        return this.propertyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Property> {
        return this.propertyService.findOne(id);
    }

    @Post()
    create(@Body() dto: CreatePropertyDto): Promise<Property> {
        return this.propertyService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() @Body() dto: UpdatePropertyDto): Promise<[number]> {
        return this.propertyService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.propertyService.delete(id);
    }
}
