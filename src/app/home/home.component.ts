import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
    title = 'my-app';
  date= Date();

 hours:any = new Date().getHours()
 isdaytime:boolean = this.hours >= 5 && this.hours <= 17

color:string='';
daynight()
{

	if(this.isdaytime)
		this.color='navbar navbar-expand-lg navbar-dark bg-primary'
	else
		this.color='navbar navbar-expand-lg navbar-dark bg-dark'
}


}
