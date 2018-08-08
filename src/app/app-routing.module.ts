import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { NextComponent } from './next/next.component';

const routes: Routes = [


  { path: 'd', component: DetailsComponent ,
    children:[
        {path:'a', component:NextComponent}
    ]
  }




];




@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]

})
export class AppRoutingModule {}