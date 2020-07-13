import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { DataService } from './data.service';
import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
users$:User[]
  title = 'LearningAndDevelopment';
  constructor(private router: Router,location: PlatformLocation, private dataservice:DataService,) { 
  location.onPopState(() => {
    // console.log(pressed back in add!!!!!);
    // this.router.navigateByUrl(‘/multicomponent’);
    history.forward();
    });
  }
  ngOnInit() {
    this.router.navigate(['/dashboard']);
    return this.dataservice.getUsers()
    .subscribe(data=> this.users$ = data);
  }
}

