import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from 'src/app/interfaces/usuario';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;
  menu: any[] = [];
  usuarios: Usuario[] = [];


  constructor(
    public http: HttpClient,
    public router: Router
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
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.usuario = null;
      this.menu = [];
    }
  }

  // CRUD usuario
// ==================================================
// Dar de alta nuevo usuario
// ==================================================
  crearUsuario( usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario';
    return this.http.post<Usuario>( url, usuario, { observe: 'response' } );
  }


// ==================================================
// Modificar usuario
// ==================================================
  modificarUsuario() {}


// ==================================================
// Cambiar imagen de usuario
// ==================================================
  cambiarImagenUsuario() {}



// ==================================================
// Cargar Listado de usuarios
// ==================================================
  cargarUsuarios(tipo: string, desde: number = 0) {

    const url = URL_SERVICIOS + '/usuario/?desde=' + desde;
     return this.http.get(url);
    // return this.http.post<Usuario>( url, usuario, { observe: 'response' } );
  }


// ==================================================
// Borrar usuarios
// ==================================================
  borrarUsuario() {}


// ==================================================
// Buscar Usuarios
// ==================================================
  buscarUsuarios(busqueda: string) {
    const url = URL_SERVICIOS + '/busqueda/usuarios/' + busqueda;
    return this.http.get<Usuario[]>( url, { observe: 'response'} );
  }
}
