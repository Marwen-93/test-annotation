import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAnnotateTextModule } from 'ngx-annotate-text';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAnnotateTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
