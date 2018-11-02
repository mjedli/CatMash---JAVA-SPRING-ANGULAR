import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatMashComponent }   from './catmash/catmash.component';
import { AllCatsComponent }   from './all-cats/allcats.component';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent, CatMashComponent, AllCatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
