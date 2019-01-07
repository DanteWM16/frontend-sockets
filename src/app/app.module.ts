import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { opcionesNotifier } from './config/config';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { PipesModule } from './pipes/pipes.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { AuthInterceptor } from './interceptor/interceptor';


const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    PerfilComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule.withConfig(opcionesNotifier),
    SocketIoModule.forRoot(config),
    PipesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
    useClass:  AuthInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
