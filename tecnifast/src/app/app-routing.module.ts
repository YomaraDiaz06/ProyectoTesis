import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InformationComponent } from './pages/information/information.component'; 
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PagesComponent } from './pages/pages.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';


const routes: Routes = [

  
  {path: 'login',    component: LoginComponent},
  {path: 'register',    component: RegisterComponent},
  
  { path:'', component:PagesComponent,
  children:[
    {path: 'information', component:InformationComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'contactanos', component:ContactanosComponent},
    {path: 'soluciones', component:InformationComponent},
    {path: 'trabaja-nosotros', component:InformationComponent},

    ],


  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }