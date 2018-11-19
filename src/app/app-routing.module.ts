import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path: '', component: ContentComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'store', component: StoreComponent },
      { path: 'store/:id', component: ProductComponent },
    ]
  }

  // { path: 'd', component:   }




];




@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }