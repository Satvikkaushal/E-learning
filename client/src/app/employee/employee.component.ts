import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { course,DataService } from '../data.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  i:string="";
  details: course = new course("","");
  users$:User[];
  constructor(private dataService:DataService){} 
 
  ngOnInit(){
    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data);
    console.log("employee");
  }
  addReqcourse(): void {
    var retVal=confirm("Want to send?");
    if (retVal == true)
    {
      //alert("going");
        this.dataService.addReqcourse(this.details);
        //(<HTMLInputElement> document.getElementById("submit")).disabled = true;
    } 
    else
    {  
    }
    // this.dataService.addReqcourse(this.details);
    // // document.getElementById("submit").disabled = true;
    // (<HTMLInputElement> document.getElementById("submit")).disabled = true;
   }
   addtomycourse(user): void {
     //console.log(user);
    this.dataService.addtomycourse(user);
    // document.getElementById(“add”).value= “clicked” ;
  //  (<HTMLInputElement> document.getElementById("add")).disabled = true;

   }
   reset(){
    (<HTMLInputElement> document.getElementById("submit")).disabled = false;
   }
}
