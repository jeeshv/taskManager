import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,//来检查我
})
export class QuickTaskComponent implements OnInit {
  desc :string;
  @Output() quickTask = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  @HostListener('keyup.enter')
  sendQuickTask() {
    if (!this.desc || this.desc.length === 0 || !this.desc.trim() || this.desc.length > 20) {
      return;
    }
    this.quickTask.emit(this.desc);
    this.desc = '';
  }

}
