import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { UserDataService } from './../user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  post: any;                       // A property to our submitted form
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private userDetail:UserDataService){
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName':'',
      'email': '',
      'password': ''
    });
  }

  ngOnInit() {
  }

  usersdata = [];
  addPost(post){
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.email = post.email;
    this.password = post.password;

    console.log(post);

    this.userDetail.saveUser(post)
    .subscribe(userPost => {
      this.usersdata.push(userPost);
    });
  }

  data: any;

  showData() {
    this.userDetail.getUser()
      .subscribe(data =>  {
        this.data = data
      });

      console.log(this.data);
  }

}
