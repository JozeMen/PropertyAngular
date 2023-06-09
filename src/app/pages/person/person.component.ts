import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PersonService} from "../../inner/services/person.service";
import {Person} from "../../inner/models/person";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{
  allPeople!: Person[];
  person!: Person;
  err: boolean = false;
  isEditable!: number;
  committeeName!: string;

  name!: string;
  birthdate!: Date;
  homeAddress!: string;
  scienceGrade!: string;

  newname!: string;
  newbirthdate!: Date;
  newhomeAddress!: string;
  newscienceGrade!: string;
  committee_nameIsReadable: boolean = false;

  constructor(private router: Router, private personService: PersonService) {
  }

  // onSelect(committee: Committee) {
  //
  // }
  ngOnInit(): void {
    this.personService.getAllPeople().subscribe({
        next: (data) => {
          this.allPeople = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
  }
/*
    this.committeeService.getAllCommittee().subscribe({
        next: (data) => {
          this.allCommittees = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
  }

  createPerson(value5: string, value: string, value1: Date, value3: string, value4: string ) {
    this.personService.createPerson(value5, value, value1, value3, value4).subscribe({
      next: (data) => {}
    })
  }

  deletePerson(value: number) {
    this.personService.deletePersonById(value).subscribe({
      next: (data) => {}
    })
  }
  editPErson(value5: number, value: string, value1: Date, value3: string, value4: string) {
    this.personService.editPerson(value5, value, value1, value3, value4).subscribe({
      next: (data) => {}
    })
  }*/
}
