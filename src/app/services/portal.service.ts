import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApilService } from '../shared/service/http/api.service';

@Injectable()
export class PortalService {
    constructor(private api: ApilService) {
    }

    userLogin(params): Observable<any> {
        return this.api.get(`user/login.do`, {
            search: params,
            header:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Headers':'content-Type,Authorization'
            }
        }).map(function(res:Response){
            return res.json();
        });
    }

    managerLogin(params): Observable<any> {
        return this.api.post(`manage/user/login.do`,params, {
            header:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Headers':'content-Type,Authorization'
            }
        }).map(function(res:Response){
            return res.json();
        });
    }
}
