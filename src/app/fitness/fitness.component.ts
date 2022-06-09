import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {






closeModal: string='';

  constructor( private modalService: NgbModal ) {}

  ngOnInit(): void{ }



triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
   private getDismissReason(reason: any) {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }




  pbar:number=0
  pb(val:number){
  	this.pbar=val
  }

 selection:string=''
  userdata:any={}
  vis:any=false
  h:number=1
  bmi:number=1
  iw:number=0
  x:number=50
  cata:string=''
  w:number=0
  bmr:number=0
  aclv:number=0

  getuser(data:any)
  {

    if(this.selection=='m')
    {
      this.x=50;
      this.bmr=88.36+(13.39*data.we)+(4.79*(data.he*30.48))-(5.67*data.ag)
    }
    else
    {
      this.x=45.5;
      this.bmr=447.593+(9.247 * data.we) + (3.098 * (data.he*30.48)) - (4.330 * data.ag)
    }
  	this.h=(data.he*30.48)
    this.iw=this.x+(0.91*(this.h-152.4))
    this.bmi=data.we/((this.h/100)*(this.h/100))
    console.warn(this.bmi)

    if(this.bmi>=25)
    {
     this.w=data.we-this.iw
     this.cata='OverWeight'
    }
    else
    {
    if(this.bmi<=18.5)
    {
     this.w=this.iw-data.we
     this.cata='UnderWeight'
    }
    else
    {
      this.w=0
      this.cata='Normal'
    }
    }




  }

  catalogTitles = [
    {id:1,title:'Physically Less Active'},
    {id:2,title:'Physically Morderately Active'},
    {id:3,title:'Physically Very Active'},
  ]

  al(value:any){
    if(value.id==1)
    {
      this.aclv=1.5
    }
    if(value.id==2)
    {
      this.aclv=1.8
    }
    if(value.id==3)
    {
      this.aclv=2.3
    }

  }


}
