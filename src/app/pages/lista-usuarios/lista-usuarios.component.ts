import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import swal from 'sweetalert2';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: string;
  totalRegistros = 0;

  constructor(
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

// ======================================================
// Mostrar lista de usuarios registrados en sistema
// ======================================================
  cargarUsuarios() {
    this._usuarioService.cargarUsuarios( this.desde )
    .subscribe( (resp: any) => {
      this.totalRegistros = resp.conteo;
      this.usuarios = resp.usuarios;
    }, ( err ) => {
      swal({
        title: 'Error al cargar usuarios',
        text: 'Surgio un problema con la consulta',
        type: 'warning',
        background: 'rgba(0,0,0,0.96)'
      });
    });
  }
// ======================================================
// Busqueda de usuario
// ======================================================
  buscarUsuarios(busqueda: string ) {
    if ( busqueda.length <= 0) {
      this.cargarUsuarios();
      return;
    }
    this._usuarioService.buscarUsuarios( busqueda )
    .subscribe( ( data: any ) => {
      const resp = data.body;
      this.usuarios = resp.usuarios;
    }, (error: any) => {
      console.log(error);
    });
  }
}
