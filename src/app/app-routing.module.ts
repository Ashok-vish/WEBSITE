import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UiComponent } from './ui/ui.component';
import { ToggleComponent } from './toggle/toggle.component';


const routes: Routes = [
  { path: '', component: WebComponent },
  { path: 'cart', component: CartComponent },
  { path: 'header', component: HeaderComponent },
  {path:'ui' , component:UiComponent },
  // {path:'footer', component:FooterComponent },
  {path:'toggle' , component:ToggleComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
