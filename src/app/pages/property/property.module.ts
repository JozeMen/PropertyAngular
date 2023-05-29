import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PropertyService} from "../../inner/services/property.service";
import {PropertyComponent} from "./property.component";



@NgModule({
  declarations: [PropertyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PropertyComponent
      },
    ]),
    FormsModule
  ],
  providers: [PropertyService]
})
export class PropertyModule { }
