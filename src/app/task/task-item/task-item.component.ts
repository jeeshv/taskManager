import { Component, OnInit, Input, Output, EventEmitter,HostListener } from '@angular/core';
import { itemAnim } from '../../anims/item.anim'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  animations: [
    itemAnim
  ]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'in';
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }
  onItemClick() {
    this.taskClick.emit();//发射事件
  }
  onCheckBoxClick(ev: Event) {
    ev.stopPropagation();//阻止事件传播
  }

  @HostListener('mouseenter')
  onmouseenter(){
    this.widerPriority = 'out';
  }
  @HostListener('mouseleave')
  onmouseleave(){
    this.widerPriority = 'in';
  }


}
