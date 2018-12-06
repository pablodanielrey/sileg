import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import {HttpClient, HttpParams} from '@angular/common/http';
import { Http } from '@angular/http'

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Mail, Usuario, ResetClave } from './entities/usuario';

const USUARIO_API_URL = environment.usuarioApiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  sincronizacion_detalle():Observable<any> {
    let apiUrl = `${USUARIO_API_URL}/usuarios/sincronizar_google/detalle`;
    return this.http.get<any>(apiUrl).pipe(map(rs => {
      rs.respuestas.forEach(e => {
        e.creado = new Date(e.creado);
      });
      return rs;
    }));
  }

}
