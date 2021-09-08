import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { InformationComponent } from './pages/information/information.component'; 
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PagesComponent } from './pages/pages.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { PostulationtechnicalComponent } from './pages/postulationtechnical/postulationtechnical.component';
import { Services1Component } from './pages/services1/services1.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { WeComponent } from './pages/we/we.component';
import { UsersComponent } from './pages/users/users.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { PostulacionesComponent } from './pages/postulaciones/postulaciones.component';
import { ListCommentsComponent } from './pages/list-comments/list-comments.component';
const routes: Routes = [

  
  {path: 'login',    component: LoginComponent},
  {path: 'register',    component: RegisterComponent},
  { path: '', redirectTo: '/information', pathMatch: 'full' },
  
  
  { path:'', component:PagesComponent,
  children:[
    {path: 'information', component:InformationComponent},
   // {path: 'servicios', component:Services1Component},
    {path: 'contactanos', component:ContactanosComponent},
    {path: 'soluciones', component:SolutionsComponent},
    {path: 'trabaja-nosotros', component:InformationComponent},
    {path: 'postulationtechnical',component:PostulationtechnicalComponent},
    {path: 'we',component:WeComponent},
    //{path: 'perfil',component:UsersComponent},
    {path: 'perfil',component:SidebarComponent, 
      children:[
        {path: 'resume',component:UsersComponent},
        {path: 'servicios', component:Services1Component},
        {path: 'postulaciones',component:PostulacionesComponent},
        {path: 'miscomentarios', component:ListCommentsComponent}


    ],}
    
  ],
  },

  
    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }