import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import {courseVideos,courseClasses} from '../user.model';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videocomponents',
  templateUrl: './videocomponents.component.html',
  // template: `
  //   <div [innerHtml]="htmlSnippet | safe: 'url'"></div>
  // `,
  styleUrls: ['./videocomponents.component.css']
})

export class VideocomponentsComponent implements OnInit {




  constructor(private dataService:DataService,public sanitizer: DomSanitizer) { }
  public Videos:courseVideos[];
  classes:courseClasses[];
  url:string="https://www.youtube.com/watch?v=VOLKJJvfAbg"

  ngOnInit() {
    this.dataService.getcourseVideos()
    .subscribe(data =>{ this.Videos = data
    //console.log(this.Videos);

    });
    this.dataService.getcourseClasses()
    .subscribe(data => this.classes = data);
   // console.log(this.classes);
  //  this.fun1();
    
}

//videolink(i: number): SafeResourceUrl  {
 //return this.sanitizer.bypassSecurityTrustUrl(this.Videos[i].videoLink)
  // this.Videos[i].videoLink


// fun1()
// {
//   console.log(this.Videos[0].videoLink);
  
// }
}
