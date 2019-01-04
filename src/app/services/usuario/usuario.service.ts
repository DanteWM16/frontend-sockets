import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from 'src/app/interfaces/usuario';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';
import { ModificarU } from '../../interfaces/modificarPerfil';
import { tap } from 'rxjs/operators';
import { PerfilService } from '../../components/perfil/perfil.service';
import { SubirarchivoService } from '../subirarchivo/subirarchivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public notUsuario = new EventEmitter<any>();

  usuario: Usuario;
  token: string;
  menu: any[] = [];
  id: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    public _perfilService: PerfilService,
    public _subirArchivo: SubirarchivoService
  ) {
    this.cargarStorage();
  }

  // Funciones de sesion
  login( usuario: Usuario ) {
    const url = URL_SERVICIOS + '/login';

    return this.http.post<Usuario>( url, usuario, { observe: 'response' } );
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('menu');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  guardarStorage(id: string, token: string, usuario: Usuario, menu: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('menu', JSON.stringify(menu));

    this.usuario = usuario;
    this.token = token;
    this.menu = menu;
  }

  cargarStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.id = '';
      this.usuario = null;
      this.menu = [];
    }
  }

  // CRUD usuario
  crearUsuario() {}
  modificarUsuario( usuario: ModificarU, id?: string ) {
    const url = URL_SERVICIOS + '/usuario/' + this.id;

    return this.http.put<Usuario>(url, usuario, { observe: 'response' } )
              .pipe(
                tap( ( data: any ) => {
                  const datos = data.body;
                  this.usuario = datos.usuario;
                  if ( !id ) {
                    const usuarioDB: Usuario = datos.usuario;
                    this.guardarStorage(this.usuario._id, this.token, usuarioDB, 'menu');
                    this.notUsuario.emit(datos);
                  }
                  console.log(data.body);
                  if ( usuario._id === this.usuario._id ) {
                    const usuarioDB: Usuario = datos.usuario;
                    this.guardarStorage( usuarioDB._id, this.token, usuarioDB, this.menu);
                    this.notUsuario.emit(datos);
                  }

                  this._perfilService.ocultarModalPerfil();
                  swal({
                    title: 'Usuario actualizado',
                    text: datos.mensaje,
                    type: 'success',
                    background: 'rgba(0, 0, 0, 0.96)'
                  });
                }, (error: any) => {
                  swal({
                    title: 'Error al actualizar usuario',
                    text: error.error.err.errors.email.message,
                    type: 'error',
                    background: 'rgba(0, 0, 0, 0.96)'
                  });
                  this._perfilService.ocultarModalPerfil();
                }
                )
              );
  }
  cambiarImagenUsuario( archivo: File, id: string) {
    this._subirArchivo.subirArchivo( archivo, 'usuarios', id )
        .then( (resp: any) => {
          this.usuario.img = resp.usuario.img;

          this.guardarStorage(id, this.token, this.usuario, 'menu');
        })
        .catch( resp => {
          console.log(resp);
        });
  }
  cargarUsuarios() {}
  borrarUsuario() {}
  buscarUsuarios() {}
}
