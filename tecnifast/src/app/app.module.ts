import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderModule } from './componentes/header/header.module';
import { InformationComponent } from './pages/information/information.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InformationComponent
=======
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
>>>>>>> 4fd66725ac28da3793bd9c09585b37549bdc8673
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HeaderModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
