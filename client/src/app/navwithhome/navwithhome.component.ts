import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navwithhome',
  templateUrl: './navwithhome.component.html',
  styleUrls: ['./navwithhome.component.css']
})
export class NavwithhomeComponent implements OnInit {

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
