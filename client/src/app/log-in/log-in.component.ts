import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { DataService, username } from '../data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  // users$:User[];
  username:string="";
  // usertype=['Employee','Manager','Admin'];
  selectedUsertype:string='';
  constructor(private dataService:DataService){}  
  ngOnInit(){
    // return this.dataService.getUsers()   //
    // .subscribe(data => this.users$ = data);
   }   
    sendname(): void{     
    this.dataService.sendnametoback(this.username);  //sending name back
 }
selectChangeHandler(event:any){
  this.selectedUsertype=event.target.value;
  (<HTMLInputElement> document.getElementById("signin")).disabled = false;
}
}
