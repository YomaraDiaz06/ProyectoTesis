import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderModule } from './componentes/header/header.module';
import { InformationComponent } from './pages/information/information.component';
import { FooterModule } from './componentes/footer/footer.module';
import { PostulationtechnicalComponent } from './pages/postulationtechnical/postulationtechnical.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { Services1Component } from './pages/services1/services1.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
//import { SolucionesComponent } from './page/soluciones/soluciones.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    InformationComponent,
    PostulationtechnicalComponent,
    SolutionsComponent,
    Services1Component,
    NosotrosComponent,
    //SolucionesComponent
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
    FooterModule,
    
    
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
