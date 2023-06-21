import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form = new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
  })

  send(){
    console.log(this.form.value)
  }
}
