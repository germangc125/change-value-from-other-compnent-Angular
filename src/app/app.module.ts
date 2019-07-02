import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentHomeComponent } from './component-home/component-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHeaderComponent,
    ComponentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
