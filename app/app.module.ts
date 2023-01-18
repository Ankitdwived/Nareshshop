import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoperFooterComponent } from './shoper-footer/shoper-footer.component';
import { FooterComponent } from './footer/footer.component';
import { ShopperHomeComponent } from './shopper-home/shopper-home.component';
import { ShopperElectronicComponent } from './shopper-electronic/shopper-electronic.component';
import { ShopperMenfashionComponent } from './shopper-menfashion/shopper-menfashion.component';
import { ShopperWomenfashionComponent } from './shopper-womenfashion/shopper-womenfashion.component';
import { ShopperIndexComponent } from './shopper-index/shopper-index.component';
import { ShopperJeweleryComponent } from './shopper-jewelery/shopper-jewelery.component';
import { ShopperNotfoundComponent } from './shopper-notfound/shopper-notfound.component';
//import { ShopperIndexComponent } from './shopper-index/shopper-index.component';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {HttpClientModule}
import { HttpClientModule } from '@angular/common/http';
import { ShopperDetailComponent } from './shopper-detail/shopper-detail.component';
import { ShopperMoreDetailComponent } from './shopper-more-detail/shopper-more-detail.component';
import { ShopperLoginComponent } from './shopper-login/shopper-login.component';
//import { ShopperErrorComponent } from './guard/shopper-error/shopper-error.component';
import { counterReducer } from './counter.reducer';

import { ShopperErrorComponent } from './shopper-error/shopper-error.component';
import { ShopperRegisterComponent } from './shopper-register/shopper-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDemoComponent } from './component/material-demo/material-demo.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CookieService } from 'ngx-cookie-service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CartComponent } from './component/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
    
    AppComponent,
    HeaderComponent,
    ShoperFooterComponent,
    FooterComponent,
    ShopperHomeComponent,
    ShopperElectronicComponent,
    ShopperMenfashionComponent,
    ShopperWomenfashionComponent,
    ShopperIndexComponent,
    ShopperJeweleryComponent,
    ShopperNotfoundComponent,
    ShopperDetailComponent,
    ShopperMoreDetailComponent,
    ShopperLoginComponent,
    ShopperErrorComponent,
    ShopperRegisterComponent,
    MaterialDemoComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forRoot({count:counterReducer}, {})
  ],
  providers: [CookieService],
  bootstrap: [ShopperIndexComponent]
})
export class AppModule { }
