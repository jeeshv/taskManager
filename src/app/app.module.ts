import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { DemoMaterialModule } from './material-module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    MatSidenavModule,
    DemoMaterialModule,
    CoreModule,
    LoginModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
