import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

var config = {
  apiKey: "AIzaSyAmME8RB3aTFcGjVFy79QKZD1Zv91LJ2WY",
  authDomain: "image-searcher-ee95b.firebaseapp.com",
  databaseURL: "https://image-searcher-ee95b.firebaseio.com",
  projectId: "image-searcher-ee95b",
  storageBucket: "image-searcher-ee95b.appspot.com",
  messagingSenderId: "61091981132",
  appId: "1:61091981132:web:ebd36bef8cb11645"
};

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    HomeComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
