import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import * as fromPrimaryNavs from './reducers/primary-navs.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

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
    AppRoutingModule,
    StoreModule.forRoot({ selected_nav_id: fromPrimaryNavs.reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
