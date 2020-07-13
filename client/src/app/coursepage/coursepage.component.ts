import { Component, OnInit } from '@angular/core';
declare var cpp: any;

@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.css']
})
export class CoursepageComponent implements OnInit {

  constructor() { }

  allImagesWithMesurments: any;

  ngOnInit() {
  }
}
