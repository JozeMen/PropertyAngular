import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Property} from "../models/property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  constructor(private http: HttpClient, private router: Router) { }
  private propertyUrl = 'http://localhost:8081/api/properties';

  public getAllProperties() {
    return this.http.get<Property[]>(this.propertyUrl);
  }
  public createProperty(name: string, propDescription: string) {
    return this.http.post<Property>(this.propertyUrl, {
      name,
      propDescription
    });
  }
}
