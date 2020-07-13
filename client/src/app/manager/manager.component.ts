import { Component, OnInit } from '@angular/core';
import { User ,EmployeeList} from '../user.model';
import { course,DataService } from '../data.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  details: course = new course("","");
  users$:User[];
  EmpList:EmployeeList[];
  constructor(private dataService:DataService){} 
 
  ngOnInit(){
     this.dataService.getUsers()
     .subscribe(data => this.users$ = data);
     this.dataService.getEmp()
     .subscribe(data => this.EmpList = data);
  }
   addcourse(): void {
     //alert("satvik");
    this.dataService.addcourse(this.details);
    // document.getElementById("submit").disabled = true;
    (<HTMLInputElement> document.getElementById("submit")).disabled = true;
   }
   addtomycourse(user): void {
    this.dataService.addcourse(user);
   }
   modal(){
    (<HTMLInputElement> document.getElementById("submit")).disabled = false;
   }
}