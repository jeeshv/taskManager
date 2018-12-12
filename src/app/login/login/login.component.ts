import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../domain/quote.model';
import { PortalService } from '../../services/portal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  quote: Quote;
  myGroup: FormGroup;
  constructor(
    private portalService:PortalService,
    private quoteService$: QuoteService,//$ 符号 = 是一个流
    private fb: FormBuilder, ) { //FormBuilder用于简化数据初始化的工作
    this.quoteService$.getQuote().subscribe(q => this.quote = q);
    this.quoteService$.get("quotes/1").subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
    this.myGroup = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
    //v1
    /* this.myGroup = new FormGroup({
      email:new FormControl('',Validators.compose([Validators.required,Validators.email])),
      password:new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)])),
    }); */
  }
  onSubmit({ value, valid }, ev: Event) {//valid :boolean是否合法
    ev.preventDefault();//默认的行为
    if(valid){
      console.log(JSON.stringify(value));
      const obj = { username: 'admin', password: 'admin' }
    this.portalService.managerLogin(obj).subscribe(result => {
      console.log("=======登录=========");
      console.log(result);
    });
    }
    
    
  }

}
