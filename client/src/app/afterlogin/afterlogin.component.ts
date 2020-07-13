import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { course,DataService } from '../data.service';

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterloginComponent implements OnInit {
  sessionStatus:string="Loggedout"
  constructor(private router: Router,private dataService:DataService){} 

  ngOnInit() {
  }
  loggingOut(){
    //alert("logging out");
    var retVal=confirm("log Out?");
    if (retVal == true)
    {
        //alert("User wants to continue!");
        //this.dataService.loggedOut(this.sessionStatus);
        this.router.navigate(['/LogIn']);
        return true;
    } 
    else
    {
        //alert("User does not want to continue!");
        return false;
    }
    
  }
 }
