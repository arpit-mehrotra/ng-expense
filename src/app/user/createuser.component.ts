import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { UserService } from './user.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {
  genders: any[] = [
    {code: 'M', value: 'Male'},
    {code: 'F', value: 'Female'}
  ]

  user =  <User>{};
  userAdded = new Subject();

  constructor(private http: HttpClient, private snackBar: MatSnackBar,
    private userService: UserService, private router:Router) { }

  ngOnInit() {

  }

  saveData(){
    this.createUsers().subscribe((data:any) => {
      if(data){
        this.userService.userAdded.next("");
        this.snackBar.open('User saved successfully','Success',{
          duration: 2000,
        });
        this.router.navigate(['/user']);
      }
    })
  }

  getFormattedDate(event){
    this.user.dob = moment(event.value).format("YYYY-MM-DD");
  }

  createUsers(){
    const url = "http://localhost:3000/users"
    return this.http.post(url,this.user);
  }

}
