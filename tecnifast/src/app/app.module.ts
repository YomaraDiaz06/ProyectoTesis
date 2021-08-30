import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
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
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


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
    LoginComponent,
    RegisterComponent,
    //SolucionesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HeaderModule,
    FooterModule,
    HttpClientModule
    
    
  ],
  providers: [
    JarwisService,
    TokenService, 
    AuthService, 
    AfterLoginService, 
    BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
