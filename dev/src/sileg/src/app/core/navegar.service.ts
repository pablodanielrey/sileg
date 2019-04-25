import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

export interface Ruta {
  url: string;
  params: {};
}

@Injectable({
  providedIn: 'root'
})

export class NavegarService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  generarVolver(url: string, back: Ruta) {
    sessionStorage.setItem(url, JSON.stringify(back));
  }

  obtenerVolver(): Observable<Ruta> {
    let url = this.router.url.split('?')[0];
    if (sessionStorage.getItem(url)) {
      return of(JSON.parse(sessionStorage.getItem(url)));
    } else {
      return of(null);
    }    
  }

  volver(url: string = '', params: Object = null): Observable<any> {
    return this.obtenerVolver().pipe(
      map( ruta => {
        if (ruta == null) {
          this.router.navigate([url], {queryParams: params});  
        } else {
          this.router.navigate([ruta.url], {queryParams: ruta.params} );
        }
      })
    )

  }

  obtenerRuta():Observable<Ruta> {
    return this.route.queryParams.pipe(
      map(params => {
        return {
          url: this.router.url.split('?')[0],
          params:params
        }
      }),
      tap( v => console.log(v))
    )
  }

  navegar(ruta: Ruta):Observable<boolean> {
    return this.obtenerRuta().pipe(
      tap( ruta_actual => this.generarVolver(ruta.url, ruta_actual)),
      switchMap( r => {
        return this.router.navigate([ruta.url], {queryParams: ruta.params}) 
      }))
    // )
    // return Observable.create((obs) => {
    //   let url = this.router.url.split('?')[0];
    //   let params = this.route.snapshot.queryParams;
    //   this.generarVolver(ruta.url, {url: url, params: params});
    //   let b = this.router.navigate([ruta.url], {queryParams: ruta.params} )
    //   obs.next(b);
    // })
  }
}
