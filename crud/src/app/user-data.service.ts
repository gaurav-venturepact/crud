import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('http://localhost:3000/api/userGetAdmin/');
  }

  saveUser(post){
    return this.http.post('http://localhost:3000/api/postUser/',{post});
  }

}
