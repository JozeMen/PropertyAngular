import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Person} from "../models/person";


@Injectable()
export class PersonService {
  constructor(private http: HttpClient, private router: Router) { }
  private personUrl = 'http://localhost:8081/api/people';

  public getAllPeople() {
    return this.http.get<Person[]>(this.personUrl);
  }

  public getPerson(name: string) {
    return this.http.get<Person>(this.personUrl + "/" + name);
  }

  public createPerson( name1: string, name: string, birthdate: Date, homeAddress: string, scienceGrade: string) {
    return this.http.post<Person>(this.personUrl + "/" + name1, {
        name,
        birthdate,
        homeAddress,
        scienceGrade
      },
      {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": "*"

        })
      }
    );
  }
}
