import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  oculto: string;


  constructor(
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    // this.oculto = 'oculto';

  }

nuevoUsuario() {

}

}
