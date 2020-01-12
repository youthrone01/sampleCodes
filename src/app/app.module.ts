import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollerOneComponent } from './virtualScrollOne/scroller-one/scroller-one.component';
// import { MyVirtualScrollComponent } from './virtualScrollTwo/my-virtual-scroll/my-virtual-scroll.component';
import {MyVirtualScrollModule} from "./virtualScrollTwo/my-virtual-scroll/my-virtual-scroll.module";
import { PageOneComponent } from './page-one/page-one.component';
@NgModule({
  declarations: [
    AppComponent,
    ScrollerOneComponent,
    PageOneComponent,
    // MyVirtualScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyVirtualScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
