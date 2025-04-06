import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Property extends Model {
  @Column
  name: string;
  @Column
  address: string;
  @Column
  year: number;
  @Column
  numberOfHousingUnits: number;
}