import { Component, OnInit } from '@angular/core';
import { AppreviewService } from '../services/appreview.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
	apidata:any;
  constructor(private ur:AppreviewService) { 

   ur.getrev().subscribe((data)=>
  	{
  		this.apidata=data
  	}
  	)

  }

  ngOnInit(): void {
  }

}
