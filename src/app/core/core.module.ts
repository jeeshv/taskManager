import { NgModule, SkipSelf, Optional } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry, MatNativeDateModule } from '@angular/material';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { loadSvgResources } from '../utils/svg.util';
import 'hammerjs';
import 'rxjs/add/operator/take';

@NgModule({
  imports: [
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpModule,
    HttpClientModule,
    MatNativeDateModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    SideBarComponent
  ],
  providers:[
    {provide:'BASE_CONFIG',useValue:'http://localhost:3000'}
  ]

})
export class CoreModule {
  // @Optional() @SkipSelf() 避免死循环
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已经存在，不能再次加载！')
    }
    loadSvgResources(ir, ds);
  }
}
