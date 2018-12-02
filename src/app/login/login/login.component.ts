import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myGroup:FormGroup;
  constructor() { }

  ngOnInit() {
    this.myGroup = new FormGroup({
      email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password:new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)])),
    });
  }
  onSubmit({value,valid},ev:Event){//valid :boolean是否合法
    ev.preventDefault();//默认的行为
    console.log(JSON.stringify(value));
    console.log(valid);
  }

}
