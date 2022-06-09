import { Component, OnInit } from '@angular/core';
import { AppreviewService } from '../services/appreview.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 apidata:any;
  constructor( private ur:AppreviewService ) {
   }

  ngOnInit(): void {
  }

getreview(data:any)
  {
  this.ur.saverev(data).subscribe((result)=>
  {
  	
  })
  }





  rvs=0
  submitted()
  {
  	this.rvs=1

  
  }
  

}
