import { Component } from '@angular/core';
import {DataService} from '../service/data.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public d:DataService){
    this.d.log()
  }
}
