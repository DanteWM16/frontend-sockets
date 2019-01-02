import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListaUserComponent } from './lista-user/lista-user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
  { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios'} },
  { path: 'listaUser', component: ListaUserComponent, data: { tutilo: 'Lista d eUsuarios'}},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
