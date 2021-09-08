import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
import { AuthInterceptor } from './services/auth.interceptor';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { RegisterTecnicoComponent } from './pages/register-tecnico/register-tecnico.component';
import { ListCommentsComponent } from './pages/list-comments/list-comments.component';
import { PostulacionesComponent } from './pages/postulaciones/postulaciones.component';

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
    SidebarComponent,
    ListUsersComponent,
    RegisterTecnicoComponent,
    ListCommentsComponent,
    PostulacionesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    
    
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
