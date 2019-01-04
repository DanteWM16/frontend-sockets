import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';
import { finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this._usuarioService.token;
    console.log(authToken);

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    return next.handle(authReq);
  }
}
