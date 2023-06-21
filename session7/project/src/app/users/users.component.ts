import { Component } from '@angular/core';
import {UsersServiceService} from '../users-service.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
    data:any;
    constructor(public api:UsersServiceService){
      this.api.getUsers().subscribe((res)=>{
        this.data =  res
      })
    }
}
