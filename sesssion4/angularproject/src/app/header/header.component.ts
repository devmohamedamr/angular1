import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:string = "header"
  name:string = "mohamed amr";
  jobtitle:string = "backend developer"
}
