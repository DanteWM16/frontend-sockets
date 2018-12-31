import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioService, WebsocketService } from './services.index';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule
    ],

    providers: [
        UsuarioService,
        WebsocketService
    ],

    declarations: []
})
export class ServiceModule { }
