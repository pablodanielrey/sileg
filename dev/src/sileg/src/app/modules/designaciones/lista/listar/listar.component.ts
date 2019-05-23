import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { SilegService } from '../../../../shared/services/sileg.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, ParamMap } from '@angular/router';
import { NavegarService } from '../../../../core/navegar.service';
import { ErrorService } from '../../../../core/error/error.service';
import { Designacion } from '../../../../shared/entities/sileg';
import { DenegarComponent } from '../../movimientos/denegar/denegar.component';
import { MatDialog } from '@angular/material';
import { AprobarComponent } from '../../movimientos/aprobar/aprobar.component';
import { CancelarComponent } from '../../movimientos/cancelar/cancelar.component';
import { BajaComponent } from '../../movimientos/baja/baja.component';
import { EnviarUnlpComponent } from '../../movimientos/enviar-unlp/enviar-unlp.component';
import { VerificarPrestacionComponent } from '../../movimientos/verificar-prestacion/verificar-prestacion.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  columnasDesktop : string[] = ['usuario', 'cargo', 'dedicacion', 'caracter', 'fecha', 'nota', 'resolucion', 'expediente', 'expedienteU', 'estado', 'acciones'];
  columnasCelular : string[] = ['usuario', 'codigo', 'fecha', 'estado', 'acciones'];
  lugares$: Observable<any[]>;
  referencias_visibles: boolean = false;

  constructor(private error_service: ErrorService,
    private service: SilegService,
    private navegar: NavegarService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    console.log("listar component");
    this.lugares$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.has('mid')) {
          let lid = params.get('mid');
          return this.service.desginacionesPendientes([lid]);
        } else {
          return [];
        }
      }),
      map(v => {
        let a = [];
        for (let e of v) {
          a.push({
            lugar: e.lugar,
            ptos_alta: e.ptos_alta,
            ptos_baja: e.ptos_baja,
            designaciones$: of(e.designaciones)
          })
        }
        return a
      })
    );
  }

  estado_tipo(desig) {
    return desig.estado.tipo;
  }

  clase_estado_tipo(desig) {
    return this.estado_tipo(desig);
  }

  estado_estado(desig) {
    return desig.estado.estado.substr(0,1);
  }

  clase_estado_estado(desig) {
    return this.estado_estado(desig);
  }

  adjuntar_resolucion(desig: Designacion) {
    let s = this.navegar.navegar({
      url: '/sistema/designaciones/listar/listar/'+desig.lugar_id+'/adjuntar-resolucion',
      params: { mid: desig.id }
    }).subscribe(_ => {
      s.unsubscribe();
    });
  }

  modificar(desig: Designacion) {
    let s = this.navegar.navegar({
      url: '/sistema/movimientos/editar/' + desig.id,
      params: { }
    }).subscribe(_ => {
      s.unsubscribe();
    });
  }

  aprobar(desig: Designacion) {
    const dialogRef = this.dialog.open(AprobarComponent, {
      width: '250px',
      data: desig.id
    });
  }

  denegar(desig: Designacion) {
    const dialogRef = this.dialog.open(DenegarComponent, {
      width: '250px',
      data: desig.id
    });
  }

  cancelar(desig: Designacion) {
    const dialogRef = this.dialog.open(CancelarComponent, {
      width: '250px',
      data: desig.id
    });
  }


  detalle(desig:Designacion) {
    let s = this.navegar.navegar({
      url: '/sistema/designaciones/detalle/' + desig.id,
      params: { }
    }).subscribe(_ => {
      s.unsubscribe();
    })
  }

  dar_de_baja(desig: Designacion) {
    const dialogRef = this.dialog.open(BajaComponent, {
      width: '250px',
      data: desig.id
    });
  }

  enviar_unlp(desig: Designacion) {
    const dialogRef = this.dialog.open(EnviarUnlpComponent, {
      width: '250px',
      data: desig.id
    });    
  }

  verificar_prestacion(desig: Designacion) {
    const dialogRef = this.dialog.open(VerificarPrestacionComponent, {
      width: '250px',
      data: desig.id
    });
  }


  // crear_alta(lid) {
  //   let navegar_alta = this.navegar.navegar({
  //     url: '/sistema/movimientos/alta/seleccionar-persona/sdfdsfsd',
  //     params: {}
  //   })

  //   this.subscriptions.push(this.navegar.obtenerRuta().pipe(
  //     tap(ruta_actual => {
  //       sessionStorage.setItem('finalizar_proceso', JSON.stringify(ruta_actual));
  //     }),
  //     switchMap(v => navegar_alta)
  //   ).subscribe());
  // }

  volver() {
    let s = this.navegar.volver().subscribe(_ => {
      s.unsubscribe();
    });
  }

  mostrar_error() {
    this.error_service.error({ 'error': true, 'mensaje': 'designacion creada con éxito' });
  }

}
