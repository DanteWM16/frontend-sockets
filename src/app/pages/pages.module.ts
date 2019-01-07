import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PipesModule
  ]
})
export class PagesModule { }
