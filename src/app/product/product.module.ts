import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProductResolver} from '../shared/services/product-resolver.service';
import {ProductService} from '../shared/services/product.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    ProductRoutingModule,
    SwiperModule,
    NgbModule
  ],
  declarations: [
    ProductComponent
  ],
  providers: [
    ProductService,
    ProductResolver
  ]

})
export class ProductModule { }
