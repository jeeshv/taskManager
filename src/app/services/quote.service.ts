import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Quote } from '../domain/quote.model';

@Injectable()
export class QuoteService {
  // private uri: string = 'https://api.hzy.pw/saying/v1/ciba';
  constructor(
    @Inject('BASE_CONFIG') private config,
    private http: Http) {
  }

  getQuote(): Observable<Quote> {
    const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
    let temp = this.http.get(uri).map(res => res.json() as Quote);
    return temp;
  }
  get(param: string): Observable<any> {
    const uri = `${this.config.uri}/` + param;
    return this.http.get(uri).map(res => res.json());
  }
}
