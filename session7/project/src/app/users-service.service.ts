import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(public _HttpClient:HttpClient) { }

  getUsers(){
    return this._HttpClient.get("https://jsonplaceholder.typicode.com/users")
  }

  userDetails(id:number){
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
