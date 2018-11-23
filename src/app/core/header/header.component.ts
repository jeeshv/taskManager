import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor() { 
      
  }

  ngOnInit() {
    //TODO
  }
  openSidebar() {
    this.toggle.emit();// 发射事件
  }
  onChange(checked:boolean){
    this.toggleDarkTheme.emit(checked);// 发射事件
  }

}
