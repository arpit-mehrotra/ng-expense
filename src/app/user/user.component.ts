import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData: User[]= [];
  userColumns: string[] = ['firstname', 'lastname','email','gender','dob'];
  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.populateUsers();
    this.userService.userAdded.subscribe((data) => {
      this.populateUsers();
    })
  }

  populateUsers(){
    this.getUsers().subscribe((data) => {
      this.userData = <User[]>data;
    })
  }

  getUsers(){
    const url = "http://localhost:3000/users";
    return this.http.get(url);
  }

}
