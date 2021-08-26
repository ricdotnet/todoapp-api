import {Column, Model} from "../database/decorators";

@Model()
export class User {

  @Column({
    name: 'name',
    dataType: 'varchar',
    nullable: false,
  })
  name!: string;

}