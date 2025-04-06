import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from './properties.model';
import { NotFoundException } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';


@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property)
    private propertyModel: typeof Property,
  ) {}

  async findAll(): Promise<Property[]> {
    return this.propertyModel.findAll();
  }

  async findOne(id: number): Promise<Property> {
    const property = await this.propertyModel.findByPk(id);
    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return property;
  }  

  async create(dto: CreatePropertyDto): Promise<Property> {
    return this.propertyModel.create(dto as any);
  }
  

  async update(id: number, dto: UpdatePropertyDto): Promise<[number]> {
    return this.propertyModel.update(dto as any, {
      where: { id },
    });
  }
  

  async delete(id: number): Promise<void> {
    const prop = await this.propertyModel.findByPk(id);
    if (prop) await prop.destroy();
  }
}
