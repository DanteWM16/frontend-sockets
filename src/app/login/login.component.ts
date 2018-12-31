import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl( null, [Validators.required, Validators.email]),
      password: new FormControl( null, Validators.required)
    });
  }

  ingresar() {
    const usuario: Usuario = ( this.login.value );

    this._usuarioService.login( usuario )
        .subscribe(( data: any ) => {
          const datos = data.body;
          this._usuarioService.guardarStorage( datos.id, datos.token, datos.usuario, 'No hay');
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          swal({
            title: 'Error al ingresar',
            text: error.error.mensaje,
            type: 'error',
            background: 'rgba(0, 0, 0, 0.96)'
          });
        });
  }
}


