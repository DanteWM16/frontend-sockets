import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { WebsocketService } from '../services/websocket/websocket.service';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  private notifier: NotifierService;
  private listenWs: Subscription;

  constructor(
    public _wsService: WebsocketService,
    public _usuarioService: UsuarioService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    // this._wsService.checkStatus();

    this._wsService.loginWS( this._usuarioService.usuario);
  }

}
