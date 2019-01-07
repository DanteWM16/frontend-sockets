import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SocketIoModule } from 'ngx-socket-io';
import { configSockets } from '../config/config';

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
    PipesModule,
    SocketIoModule.forRoot(configSockets)
  ]
})
export class PagesModule { }
