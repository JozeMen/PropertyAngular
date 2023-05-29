import {Person} from "./person";

export interface Property {

  propertyId:number;
  name: string;
  propDescription:string;
  people: Person[];
}
