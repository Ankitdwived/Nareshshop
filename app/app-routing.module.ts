import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsGuard } from './guard/electronics.guard';
import { HeaderComponent } from './header/header.component';
import { ShopperDetailComponent } from './shopper-detail/shopper-detail.component';
import { ShopperElectronicComponent } from './shopper-electronic/shopper-electronic.component';
import { ShopperErrorComponent } from './shopper-error/shopper-error.component';
import { ShopperHomeComponent } from './shopper-home/shopper-home.component';
import { ShopperJeweleryComponent } from './shopper-jewelery/shopper-jewelery.component';
import { ShopperLoginComponent } from './shopper-login/shopper-login.component';
import { ShopperMenfashionComponent } from './shopper-menfashion/shopper-menfashion.component';
import { ShopperMoreDetailComponent } from './shopper-more-detail/shopper-more-detail.component';
import { ShopperNotfoundComponent } from './shopper-notfound/shopper-notfound.component';
import { ShopperRegisterComponent } from './shopper-register/shopper-register.component';
import { ShopperWomenfashionComponent } from './shopper-womenfashion/shopper-womenfashion.component';

const routes: Routes = [
{path:"",component:ShopperHomeComponent},
{path:"home",redirectTo:"",pathMatch:"full"},
{path:"electronics",component:ShopperElectronicComponent, canActivate:[ElectronicsGuard]},
{path:"jewelery",component:ShopperJeweleryComponent},
{path:"men",component:ShopperMenfashionComponent},
{path:"women",component:ShopperWomenfashionComponent},
{path:"details/:id", component:ShopperDetailComponent,
children:[
  {
    path:"moredetail/:id",component:ShopperMoreDetailComponent
  }
]
},
{path:"register", component:ShopperRegisterComponent},
{path:"error",component:ShopperErrorComponent},
{path:"login",component:ShopperLoginComponent},
{path:"**",component:ShopperNotfoundComponent}
//{path:"",component:ShopperHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
