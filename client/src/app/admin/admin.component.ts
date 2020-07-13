import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { course,DataService,newCourse } from '../data.service';
// declare var increment_field:any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  newDetails: newCourse = new newCourse("","","","");
  users$:User[];
  // a:any;
  constructor(private dataService:DataService){} 
 
  ngOnInit(){
    // return this.dataService.getUsers()
    // .subscribe(data => this.users$ = data);
  }
  //  addcourse(): void {
  //   this.dataService.addcourse(this.details);
  //   // document.getElementById("submit").disabled = true;
  //   (<HTMLInputElement> document.getElementById("submit")).disabled = true;
  //  }
  //  addtomycourse(user): void {
  //   this.dataService.addcourse(user);
  //  }
  fun1(){
    // (<HTMLInputElement> document.getElementById("2")).disabled = true;
    alert("got");
    this.dataService.addNewCourse(this.newDetails);
    alert("got1");
  }
  // fun2(){
  //   (<HTMLInputElement> document.getElementById("1")).disabled = true;
  // }
  // fun3(){
  //   (<HTMLInputElement> document.getElementById("1")).disabled = false;
  //   (<HTMLInputElement> document.getElementById("2")).disabled = false;
  // }
  submit(){
    (<HTMLInputElement> document.getElementById("submit")).disabled = true;
   }
  reset(){
    (<HTMLInputElement> document.getElementById("submit")).disabled = false;
   }
}
