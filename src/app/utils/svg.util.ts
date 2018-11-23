import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer)  => {
    //将icon加入注册表
    ir.addSvgIcon('userIcon',ds.bypassSecurityTrustResourceUrl('assets/user.svg'));
    ir.addSvgIcon('eye',ds.bypassSecurityTrustResourceUrl('assets/eye.svg'));
}