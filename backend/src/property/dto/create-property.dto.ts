import { IsString, IsNumber } from 'class-validator';

export class CreatePropertyDto {
    @IsString()
    name: string;
    @IsString()
    address: string;
    @IsNumber()
    year: number;
    @IsNumber()
    numberOfHousingUnits: number;
}

  