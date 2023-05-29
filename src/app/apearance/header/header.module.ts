import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PropertyService} from "../../inner/services/property.service";
import {AuthService} from "../../inner/services/auth.service";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [AuthService]
})

export class HeaderModule { }
