import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListaUserComponent } from './lista-user/lista-user.component';


// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ListaUserComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PipesModule
  ]
})
export class PagesModule { }
