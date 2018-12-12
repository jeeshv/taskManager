import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ApilService {
    private _baseUrl = 'http://localhost:8080/'
    constructor(private http: Http) { }

    get baseUrl(): string {
        return this._baseUrl;
    }
    set baseUrl(newBaseUrl: string) {
        this._baseUrl = newBaseUrl;
    }

    get(path: string, conf: any = {}, baseUrl?: string): any {
        path = (baseUrl || this.baseUrl) + path;
        return this.http.get(path, conf).map(res => {
            return res;
        });
    }

    post(path: string, data: any, conf: any = {}, baseUrl?: string): any {
        path = (baseUrl || this.baseUrl) + path;
        return this.http.post(path, data, conf).map(res => {
            return res;
        });
    }
}