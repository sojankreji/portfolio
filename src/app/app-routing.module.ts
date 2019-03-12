import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { StoreComponent } from './store/store.component';
import { LoadingComponent } from './loading/loading.component';
import { ProductComponent } from './product/product.component';
import { WrapengineComponent } from './wrapengine/wrapengine.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
   path: 'wrapengine',
   component: WrapengineComponent
  }
];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }
