import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../clases/interceptor';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PipesModule
  ]
})
export class PagesModule { }
