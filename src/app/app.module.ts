import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MunkasComponent } from './munkas/munkas.component';
import { MunkaComponent } from './munka/munka.component';
import { GepComponent } from './gep/gep.component';
import { FeladatComponent } from './feladat/feladat.component';


@NgModule({
  declarations: [
    AppComponent,
    MunkasComponent,
    MunkaComponent,
    GepComponent,
    FeladatComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
