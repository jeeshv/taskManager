import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MmallService {
  constructor(
    @Inject('BASE_CONFIG') private config,
    private http: Http) {
  }

  get(param: string): Observable<any> {
    const uri = `${this.config.mmall}/` + param;
    return this.http.get(uri).map(res => res.json());
  }
}
