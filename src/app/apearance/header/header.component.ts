import {Component, OnInit} from '@angular/core';
import {menuData} from "./menu";
import {HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../inner/services/auth.service";
import {Auth} from "../../inner/models/auth";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
  }
  userName!: any;
  token!:string;
  navDate = menuData;

/*  auth(){
    return this.authService.auth().subscribe({
      next:(data) => {
        this.userName = data;
      }
    })
  }*/

  auth(value:string){
    return this.authService.auth(value).subscribe({
      next:(data) => {
        this.userName = data;
      }
    })
  }
}
