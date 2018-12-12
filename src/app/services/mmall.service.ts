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

  get(url,param): Observable<any> {
    const uri = `${this.config.mmall}/` + url;
    console.log(uri);
    return this.http.get(uri,param).map(res => res.json());
  }
}
