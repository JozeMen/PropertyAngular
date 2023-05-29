import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PropertyService} from "../../inner/services/property.service";
import {Property} from "../../inner/models/property";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {

  properties!: Property[];
  property!: Property;
  err: boolean = false;
  isCreatable!: string;
  newPropName!:string;
  newPropDescription!:string;

  constructor(private router: Router, private propertyService: PropertyService) {}

  onSelect(property: Property) {

  }

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe({
        next: (data) => {
          this.properties = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );

  }

  createProperty(value: string, value1: string){
    this.propertyService.createProperty(value, value1).subscribe(() =>{
      this.ngOnInit()
    })
  }

  /*deletePayment(value: number) {
    this.paymentService.deletePayment(value).subscribe({
      next: (data) => {}
    })
  }*/
}
