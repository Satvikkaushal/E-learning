import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{JavaComponent} from './java/java.component';
import {CppComponent} from './cpp/cpp.component';
import{ForgetComponent} from './forget/forget.component';
import{CoursepageComponent} from './coursepage/coursepage.component';
import{ManagerComponent} from './manager/manager.component';
import{AdminComponent} from './admin/admin.component';
import{VideocomponentsComponent} from './videocomponents/videocomponents.component';
import{NavformanagerComponent} from './navformanager/navformanager.component';
const routes: Routes = [
  {path:'LogIn',component: LogInComponent},
  {path:'Employee',component: EmployeeComponent},
  {path:'MyCourses',component:MycoursesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:'Java',component:JavaComponent},
  {path:'c++',component:CppComponent},
  {path:'forget',component:ForgetComponent},
  {path:'coursepage',component:CoursepageComponent},
  {path:'Manager', component:ManagerComponent},
  {path:'Admin',component:AdminComponent},
  {path:'Videos',component:VideocomponentsComponent},
  {path:'NavforManager',component:ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [EmployeeComponent,MycoursesComponent,LogInComponent,JavaComponent,CppComponent,ForgetComponent,CoursepageComponent,ManagerComponent,AdminComponent,VideocomponentsComponent,NavformanagerComponent] 
