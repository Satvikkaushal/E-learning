import { Component, OnInit } from '@angular/core';
 import { myCourses,getReqCourses } from '../user.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
  
@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  
  users$:myCourses[];
  courseId:number;
    reqCourses:getReqCourses[];
    message:string;
 constructor(private dataService:DataService,private router: Router){}
 
 
  ngOnInit(){
     this.dataService.getUsersmycourses()
    .subscribe(data => this.users$ = data);
     this.dataService.getUsersReqCourses()
    .subscribe(data => this.reqCourses = data);
    //console.log(this.reqCourses);
    //this.dataService.currentMessage.subscribe(message => this.message = message)
  }
  sendcourseId(courseId){
    console.log("enter mycourse"+courseId);
    this.dataService.toDataServices(courseId);
  }
}
