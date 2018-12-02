import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
export interface DragData{
  tag:string;//区分媒体拖拽，
  data:any;//传递的数据
}
@Injectable()
export class DragDropService {
  private _dargData = new BehaviorSubject<DragData>(null);
  setDragData(data:DragData){
    this._dargData.next(data);
  }
  getDragData():Observable<DragData>{
    return this._dargData.asObservable();
  }
  clearDragData(){
    this._dargData.next(null);
  }
  constructor() { }
}
