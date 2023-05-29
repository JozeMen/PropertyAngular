import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Auth} from "../models/auth";

const httpOptions = { headers: new HttpHeaders({'Content-Type':  'application/json'})};

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }


  // auth() {
  //   return this.http.get<Auth>('https://oauth.vk.com/access_token' ,
  //     {
  //       headers: new HttpHeaders({
  //         "Access-Control-Allow-Origin": "*",
  //         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  //         'Access-Control-Allow-Credentials': "true",
  //         "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  //
  //       }),
  //       params: {
  //           client_id: "51654951",
  //           client_secret: "TRlbZTlyA59ACrWYNoNc",
  //           redirect_uri: "http://localhost:4200",
  //           code: "db9f75becf46cbc75f"
  //       }
  //     },
  //    );
  // }
  auth(oauth_token: string) {
    return this.http.get('/api/info',
      {
        params: {
          format: "json",
          jwt_secret: "5e65a92c15c541d3bfc086ce2af6ed11",
          oauth_token: "y0_AgAAAABrx-jhAAnyswAAAADjzn6omMBDDbjGTZ62BF87VnYmPhpNXMs",
        }
      }
    );
  }
}
