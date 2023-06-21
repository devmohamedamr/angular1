import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UsersServiceService} from '../users-service.service'
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  id:any;
  name:string = "";
  email:string = "";
  userid:any;
  constructor(public router:ActivatedRoute,public api:UsersServiceService){
   this.id  = this.router.snapshot.paramMap.get("id")
    this.api.userDetails(this.id).subscribe((res:any)=>{
      this.name = res.name
      this.email = res.email
      this.userid = res.id
    })
  }
}
