import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    UsuarioService,
    WebsocketService,
    SubirarchivoService,
    SidebarService
 } from './services.index';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        SidebarService
    ],

    providers: [
        UsuarioService,
        WebsocketService,
        SubirarchivoService
    ],

    declarations: []
})
export class ServiceModule { }
