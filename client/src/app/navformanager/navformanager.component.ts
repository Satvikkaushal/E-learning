import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navformanager',
  templateUrl: './navformanager.component.html',
  styleUrls: ['./navformanager.component.css']
})
export class NavformanagerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  loggingOut(){
    //alert("logging out");
    var retVal=confirm("log Out?");
    if (retVal == true)
    {
       this.router.navigate(['/LogIn']);
        return true;
    } 
    else
    {
        return false;
    }
  }

}
