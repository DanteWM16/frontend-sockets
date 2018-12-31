import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';

declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();
    this.usuario = this._usuarioService.usuario;
  }

}
