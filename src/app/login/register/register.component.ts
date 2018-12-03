import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myFormGroupxx:FormGroup;
  items = [];
  private readonly avatarName = 'avatars';
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    const img = `${this.avatarName}:svg-${(Math.random() * 16).toFixed()}`;
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    this.items = nums.map(d=>`avatars:svg-${d}`);
    console.log(this.items)
    console.log(img)
    this.myFormGroupxx = this.fb.group({
      email:[],
      name:[],
      password:[],
      pconfirm:[],
      avatar:[img]
    })
  }
  onSubmit(a,b){

  }

}
