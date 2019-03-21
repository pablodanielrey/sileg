import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http'


import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import 'rxjs/Rx';

import { Mail, Usuario, ResetClave } from '../entities/usuario';
import { Sileg, DatosSileg, Lugar, PedidoDesignacion, Designacion, Cargo, DatosLugarDesignaciones, DatoDesignacion, Dato2Designacion, Configuracion } from '../entities/sileg';

const SILEG_API_URL = environment.silegApiUrl;
const LOGIN_API_URL = environment.loginApiUrl;
const USUARIO_API_URL = environment.usuarioApiUrl;

@Injectable()
export class SilegService {
  
  constructor(private http: HttpClient) { }

  desginacionesPendientes(lids): Observable<any[]> {
    let parametros = lids.join('+')
    let apiUrl = `${SILEG_API_URL}/designaciones/pendientes/lugares/` + parametros;
    return this.http.get<any[]>(apiUrl);    
  }

}
