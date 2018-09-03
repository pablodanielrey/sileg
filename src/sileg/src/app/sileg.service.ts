
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import {HttpClient, HttpParams} from '@angular/common/http';
import { Http } from '@angular/http'


import { Observable } from 'rxjs';
import 'rxjs/Rx';





import { Mail, Usuario, ResetClave } from './entities/usuario';
import { Sileg, DatosSileg, Lugar, PedidoDesignacion, Designacion, Cargo, DatosLugarDesignaciones } from './entities/sileg';

const SILEG_API_URL = environment.silegApiUrl;

@Injectable()
export class SilegService {

  //usuarios: Usuario[] = [];
  constructor(private http: HttpClient) { }

  obtenerAccesoModulos(): Observable<string[]> {
    let apiUrl = `${SILEG_API_URL}/acceso_modulos`;
    return this.http.get<string[]>(apiUrl);
  }

  buscarUsuario(uid:string): Observable<DatosSileg> {
    let apiUrl = `${SILEG_API_URL}/usuarios/${uid}`;
    return this.http.get<DatosSileg>(apiUrl).pipe(map(datos => new DatosSileg(datos)));
  }

  buscarDesignaciones(uid:string): Observable<Designacion[]> {
    let apiUrl = `${SILEG_API_URL}/usuarios/${uid}/designaciones`;
    return this.http.get<Designacion[]>(apiUrl).pipe(map(res => res.map(d => new Designacion(d))));
  }

  buscarUsuarios(texto:string): Observable<DatosSileg[]> {
    const options = { params: new HttpParams()
              .set('q', texto ? texto : 'algoquenoexiste')
              //.set('limit', 10)
              //.set('offset',0)
          };
    let apiUrl = `${SILEG_API_URL}/usuarios`;
    return this.http.get<DatosSileg[]>(apiUrl, options).pipe(map(datos => datos.map(d => new DatosSileg(d))));
  }

  crearUsuario(usuario: Usuario): Observable<any> {
    let apiUrl = `${SILEG_API_URL}/usuarios`;
    return this.http.put<any>(apiUrl, usuario);
  }

  actualizarDatos(usuario: Usuario): Observable<any> {
    let apiUrl = `${SILEG_API_URL}/usuarios/${usuario.id}`;
    return this.http.post<any>(apiUrl, usuario);
  }

  buscarLugares(texto:string): Observable<Lugar[]> {
    const options = { params: new HttpParams()
              .set('q', texto ? texto : 'algoquenoexiste')
              //.set('limit', 10)
              //.set('offset',0)
          };
    let apiUrl = `${SILEG_API_URL}/lugares`;
    return this.http.get<Lugar[]>(apiUrl, options).pipe(map(datos => datos.map(d => new Lugar(d))));
  }

  cargos(): Observable<Cargo[]> {
    let apiUrl = `${SILEG_API_URL}/cargos`;
    return this.http.get<Cargo[]>(apiUrl).pipe(map(datos => datos.map(c => new Cargo(c))));
  }

  buscarLugar(id:string): Observable<Lugar> {
    let apiUrl = `${SILEG_API_URL}/lugares/${id}`;
    return this.http.get<Lugar>(apiUrl).pipe(map(d => new Lugar(d)));
  }

  obtenerDesignacionesLugares(id: string): Observable<DatosLugarDesignaciones> {
    let apiUrl = `${SILEG_API_URL}/lugares/${id}/designaciones`;
    return this.http.get<DatosLugarDesignaciones>(apiUrl).pipe(map(d => new DatosLugarDesignaciones(d)));
  }

  crearLugar(lugar: Lugar): Observable<any> {
    let apiUrl = `${SILEG_API_URL}/lugares`;
    return this.http.put<any>(apiUrl, lugar);
  }

  modificarLugar(lugar: Lugar): Observable<any> {
    let apiUrl = `${SILEG_API_URL}/lugares/${lugar.id}`;
    return this.http.post<any>(apiUrl, lugar);
  }

  restaurarLugar(lid: string): Observable<any> {
    let apiUrl = `${SILEG_API_URL}/lugares/${lid}/restaurar`;
    return this.http.get<any>(apiUrl);
  }

  eliminarLugar(lid: string): Observable<any> {
    let apiUrl = `${SILEG_API_URL}/lugares/${lid}`;
    return this.http.delete<any>(apiUrl);
  }

  chequearDisponibilidadCorreo(cuenta:string): Observable<boolean> {
    let apiUrl = `${SILEG_API_URL}/correo/${cuenta}`;
    return this.http.get<any>(apiUrl).pipe(map(res => res.existe));
  }

  generarClave(uid:string):Observable<ResetClave> {
    let apiUrl = `${SILEG_API_URL}/generar_clave/${uid}`;
    return this.http.get<ResetClave>(apiUrl).pipe(map(res => new ResetClave(res)));
  }

  generarDesignacion(pedido:PedidoDesignacion):Observable<any> {
    let apiUrl = `${SILEG_API_URL}/designacion`;
    return this.http.post<any>(apiUrl, pedido);
  }

  generarDesignacionSinCorreo(pedido:PedidoDesignacion):Observable<any> {
    let apiUrl = `${SILEG_API_URL}/designacion-sin-correo`;
    return this.http.put<any>(apiUrl, pedido);
  }

  generarCorreo(uid: string, correo: string):Observable<any> {
    let apiUrl = `${SILEG_API_URL}/usuarios/${uid}/correos`;
    return this.http.post<any>(apiUrl, {'correo':correo});
  }

  eliminarCorreo(uid:string, cid:string):Observable<string> {
    let apiUrl = `${SILEG_API_URL}/usuarios/${uid}/correos/${cid}`;
    return this.http.delete<string>(apiUrl);
  }

  eliminarDesignacion(id: string): Observable<any> {
    let apiUrl = `${SILEG_API_URL}/designacion/${id}`;
    return this.http.delete<any>(apiUrl);
  }

  modificarDesignacion(d: Designacion): Observable<any> {
    let apiUrl = `${SILEG_API_URL}/designacion/${d.id}`;
    return this.http.put<any>(apiUrl, d);
  }

  /*
  buscarUsuarios(texto: string): Promise<DatosSileg[]> {
    return new Promise((resolve, reject) => {
      const options = { params: new HttpParams().set('q', texto ? texto : '') };
      let apiUrl = `${SILEG_API_URL}/usuarios`;
      console.log(apiUrl);
      this.http.get<string[]>(apiUrl, options)
      .toPromise()
      .then(
        res => {
          let datos = res.map(d => new DatosSileg(d));
          resolve(datos);
          //let usuarios = datos.map(d => new Usuario(d.usuario));
          //resolve(usuarios);
        }
      )
    });
  }
  */

}
