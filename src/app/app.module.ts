import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryNavsComponent } from './primary-navs/primary-navs.component';
import { DynamicInfoComponent } from './dynamic-info/dynamic-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryNavsComponent,
    DynamicInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
