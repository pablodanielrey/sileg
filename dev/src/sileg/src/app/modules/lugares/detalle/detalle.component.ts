import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NavegarService } from '../../../core/navegar.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SilegService } from '../../../shared/services/sileg.service';
import { Observable } from 'rxjs';
import { Lugar } from '../../../shared/entities/sileg';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {


  form = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    tipo: new FormControl(''),
    oficina: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl('')
  });

  lugar$: Observable<Lugar>;

  constructor(private navegar: NavegarService, private service: SilegService,
              private route: ActivatedRoute) {     
  }
 

  ngOnInit() {
    this.lugar$ = this.route.paramMap.pipe(
      tap(v => console.log(v)),
      switchMap((params: ParamMap) => {
        if (params.has('lid')) {
          let lid = params.get('lid');
          return this.service.obtenerLugar(lid);
        } else {
          return null;
        }
      }),
      tap( lugar => this.form.patchValue(lugar))
    )
  }

  volver() {
    this.navegar.volver().subscribe().unsubscribe();
  }

  designaciones() {
    this.navegar.navegar({
      url: '/sistema/designaciones/listar/sdfsdfd',
      params: {}
    }).subscribe().unsubscribe();
  }

}
