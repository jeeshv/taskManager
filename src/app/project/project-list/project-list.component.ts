import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../anims/router.anim';
import { listAnimation } from '../../anims/list.anim';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  animations: [
    slideToRight, listAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,//
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  projects = [
    {
      id: 1,
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/0.jpg'
    },
    {
      id: 2,
      name: '自动化测试项目',
      desc: '这是一个企业内部项目',
      coverImg: 'assets/img/covers/1.jpg'
    }
  ]
  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const returnData = this.dialog.open(NewProjectComponent, { data: { title: "新增项目" } });
    returnData.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [...this.projects, { id: 3, name: '一个新项目', desc: '测试', coverImg: 'assets/img/covers/2.jpg' }]//...增加元素
      this.projects = [...this.projects, { id: 4, name: '一个新项目', desc: '测试', coverImg: 'assets/img/covers/3.jpg' }]//...增加元素
      this.cd.markForCheck();//来检查我
    });//弹框传递回来的值
  }
  launchInviteDialog() {
    const returnData = this.dialog.open(InviteComponent);
  }
  launchEditDialog() {
    const returnData = this.dialog.open(NewProjectComponent, { data: { title: "编辑项目" } });
    returnData.afterClosed().subscribe(result => console.log(result));//弹框传递回来的值
  }
  launchConfirmDialog(project) {
    const returnData = this.dialog.open(ConfirmDialogComponent, { data: { title: "删除项目", content: "确认删除？" } });
    returnData.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.id !== project.id); // filter 过滤掉一些元素，返回一个新数组
      this.cd.markForCheck();//来检查我
    });//弹框传递回来的值

  }
}
