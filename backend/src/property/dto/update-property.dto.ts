import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdatePropertyDto {
    @IsOptional()
    @IsString()
    name?: string;
    @IsOptional()
    @IsString()
    address?: string;
    @IsOptional()
    @IsNumber()
    year?: number;
    @IsOptional()
    @IsNumber()
    numberOfHousingUnits?: number;
}
