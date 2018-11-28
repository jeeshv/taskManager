import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewProjectComponent>) {
      //TODO
  }

  ngOnInit() {
    console.log(JSON.stringify(this.data));//接收的值
  }

  onClick(){
    this.dialogRef.close('i receive you data');//返回值
  }

}
