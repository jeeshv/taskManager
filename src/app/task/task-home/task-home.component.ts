import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router.anim';
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css'],
  animations: [
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  lists = [
    {
      id: 1,
      name: '待办',
      order:1,
      tasks: [
        {
          id: 1,
          desc: '任务一：拿下大龙',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '阿珂',
            avatar: 'avatars:svg-11'
          },
          dueData: new Date(),
          reminder: new Date(),
        },
        {
          id: 2,
          desc: '任务二：抓敌方后排',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '阿珂',
            avatar: 'avatars:svg-11'
          },
          dueData: new Date(),
        },
      ],
    },
    {
      id: 2,
      name: '完成',
      order:2,
      tasks: [
        {
          id: 1,
          desc: '任务一：经济第一',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '嬴政',
            avatar: 'avatars:svg-11'
          },
          dueData: new Date(),
        },
        {
          id: 2,
          desc: '任务二：助攻第一',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '嬴政',
            avatar: 'avatars:svg-12'
          },
          dueData: new Date(),
        },
      ],
    },
    {
      id: 3,
      name: '其它',
      order:3,
      tasks: [
        {
          id: 1,
          desc: '任务一：比武擂台',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '项羽',
            avatar: 'avatars:svg-1'
          },
          dueData: new Date(),
        },
        {
          id: 2,
          desc: '任务二：远征',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '项羽',
            avatar: 'avatars:svg-1'
          },
          dueData: new Date(),
        },
      ],
    }
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, { data: { title: '修改任务' } });
  }
  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }
  launchUpdateTaskDialog(task) {
    this.dialog.open(NewTaskComponent, { data: { title: '修改任务', task: task } });
  }
  launchDelListDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除任务列表', content: "确认删除？" } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '编辑列表名称' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  launchAddListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, { data: { title: '新建列表' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
  
  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item': {
        console.log('handling item');
        break;
      }
      case 'task-list': {
        console.log('handling list');
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order = list.order;
        list.order = tempOrder;
        break;
      }
      default:
        break;
    }
  }
  add() {
    alert("啥也没做")
  }

}
