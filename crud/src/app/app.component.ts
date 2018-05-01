import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "hello";
  
  rForm: FormGroup;
  post: any;                       // A property to our submitted form
  lastName: string = '';
  firstName: string = '';
  email: string = '';

  constructor(private fb: FormBuilder){
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName':'',
      'email': ''
    });
  }

  addPost(post){
    this.firstName = post.firstName;
    this.lastName = post.lastName;
    this.email = post.email;

    console.log(post);
  }
}