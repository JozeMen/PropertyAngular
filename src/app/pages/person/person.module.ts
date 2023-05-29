import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PersonComponent} from "./person.component";
import {PersonService} from "../../inner/services/person.service";
import {PropertyService} from "../../inner/services/property.service";



@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PersonComponent
      },
    ]),
    FormsModule
  ],
  providers: [PersonService, PropertyService]
})
export class PersonModule { }
