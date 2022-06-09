import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component'
import { AdminComponent } from './admin/admin.component'

const routes: Routes = [


	
	{
	path:'',
	component:HomeComponent
	},
	{
	path:'admin',
	component:AdminComponent
	},
	{
	path:'**',
	component:ErrorpageComponent
	}



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
