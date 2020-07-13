import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import {myCourses,getReqCourses,EmployeeList } from './user.model';



export class course{
  constructor(
    public reqCourse:string,
    public reqCJustification:string,
  ) {}
}
export class newCourse{
  constructor(
    public courseName:string,
    public courseDescription:string,
    public courseDuration:string,
    public courseImage:string,
  ) {}
}
export class username{
  constructor(  public username:string="",){}
}
export class courseVideos
{

}
export class courseClasses{

}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  courseId:any;
  apiUrl="http://localhost:8080/course/all"
  mycourseUrl="http://localhost:8080/Empcourse/courses" 
  reqCoursesUrl="http://localhost:8080/Empcourse/course/suggestcourse/"
  newCourseUrl="http://localhost:8080/course/addCourse"
  //gettingvideosUrl="http://localhost:8080/course/videos/"+this.courseId
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
  httpClient: HttpClient;
  username:string="";

  addUser: any;
 


  constructor(private _http: HttpClient) { }
    

  getUsers(){
    return this._http.get<User[]>(this.apiUrl)  // getting data from (http://localhost:8080/course/all)  
  }
  addNewCourse(newCourse){
    return this._http.post<newCourse[]>(this.newCourseUrl,newCourse,
      //update link for sending requested
      {headers: this.headers}).subscribe(
        res => console.log(res),
        err => console.log(err))
  }
  getcourseVideos(){
    // return this._http.get<myCourses[]>(this.gettingvideosUrl)
   return this._http.get<courseVideos[]>("http://localhost:8080/course/videos/"+this.courseId)
  }
  getcourseClasses(){
    // return this._http.get<myCourses[]>(this.gettingvideosUrl)
   return this._http.get<courseClasses[]>("http://localhost:8080/course/classes/"+this.courseId)
  }
  getUsersmycourses(){
    return this._http.get<myCourses[]>(this.mycourseUrl)  // getting data from (http://localhost:8080/course/all)  
  }
  getUsersReqCourses(){
    return this._http.get<getReqCourses[]>(this.reqCoursesUrl)  // getting data from (http://localhost:8080/course/all)  
  }
  getEmp(){
    return this._http.get<EmployeeList[]>("http://localhost:8080/Empcourse/all")

  }
  public addcourse(course) {

    return  this._http.post("", course,//update link for sending requested
      {headers: this.headers}).subscribe(
        res => console.log(res),
        err => console.log(err))
    }
    public addReqcourse(course) {

      return  this._http.post("http://localhost:8080/Empcourse/course/addSuggestcourse/", course,//update link for sending requested
        {headers: this.headers}).subscribe(
          res => console.log(res),
          err => console.log(err))
      }

    public addtomycourse(user){
      return  this._http.post("http://localhost:8080/Empcourse/addingCourseToEmp/"+user, //update link fro sending add from available
      {headers: this.headers}).subscribe(
        res => console.log(res),
        err => console.log(err))
    }
    sendnametoback(username){
      return  this._http.post("http://localhost:8080/Empcourse/name/"+username,//update link for sending username
      {headers: this.headers}).subscribe(
        res => console.log(res),
        err => console.log(err))
    }
    loggedOut(sessionStatus){
      return  this._http.post("http://localhost:8080/"+sessionStatus, // sending logging out string
      {headers: this.headers}).subscribe(
        res => console.log(res),
        err => console.log(err))
    }
    toDataServices(courseId){
      this.courseId=courseId;
      console.log(this.courseId);
      return this._http.get<courseVideos[]>("http://localhost:8080/course/videos/"+courseId,
      {headers: this.headers}).subscribe(
        res => console.log(res),
        err => console.log(err))
    }
    
}