import { Component } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

const httpOptions = { headers: new HttpHeaders({          "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Credentials': "true",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  })};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PropertyAngular';
}
