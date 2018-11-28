import { Component, OnInit } from '@angular/core';
import { getDate, getMonth } from 'date-fns';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  today = 'day';
  items = [
    { name: '月视图', icon: 'month', tip: '按月查看您的任务' },
    { name: '周视图', icon: 'week', tip: '按周查看您的任务' },
    { name: '日视图', icon: '', tip: '按日查看您的任务' }
  ]
  constructor(private router :Router) { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
    const month = `day${getMonth(new Date())}`;
    this.items[0].icon = month;
    this.items[2].icon = this.today;
  }

  project(){
    this.router.navigate(['/project' ]);
  }

}
