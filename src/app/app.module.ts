import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    MatSidenavModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
