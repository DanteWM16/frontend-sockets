import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: any;

  oculto: string;
  constructor(
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    this.oculto = 'oculto';
  }

  seleccionarImagen( archivo: File) {
    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal({
        title: 'Solo imagenes',
        text: 'El archivo seleccionado no es una imagen',
        type: 'error',
        background: 'rgba(0, 0, 0, 0.96)'
      });
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;
    console.log(reader.result);
  }

  mostrarFile(  ) {
    const element: HTMLElement = document.getElementById('upload_img') as HTMLElement;
    element.click();
  }

}
