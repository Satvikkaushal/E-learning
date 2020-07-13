import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { DummyloginComponent } from './dummylogin/dummylogin.component';
import { NavwithhomeComponent } from './navwithhome/navwithhome.component';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from './data.service';
import {FormsModule} from '@angular/forms';
import { JavaComponent } from './java/java.component';
import{CppComponent} from './cpp/cpp.component';
import { ForgetComponent } from './forget/forget.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';
import { VideocomponentsComponent } from './videocomponents/videocomponents.component';
import { Pipe, PipeTransform } from '@angular/core';
import { NavformanagerComponent } from './navformanager/navformanager.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    DashboardComponent,
    AfterloginComponent,
    DummyloginComponent,
    NavwithhomeComponent,
    JavaComponent,
    CppComponent,
    ForgetComponent,
    CoursepageComponent,
    ManagerComponent,
    AdminComponent,
    VideocomponentsComponent,
    NavformanagerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,NgxYoutubePlayerModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
