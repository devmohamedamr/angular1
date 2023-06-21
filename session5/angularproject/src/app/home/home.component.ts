import { Component } from '@angular/core';
import { DataService } from '../service/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users:any;
  constructor(public data:DataService){
    // this.usersdata()
  }



  usersdata(){
    this.data.getusers().subscribe((res)=>{
      this.users = res
    })
  }
}
