import { Component, OnInit } from '@angular/core';

import { SilegService } from '../sileg.service'

import { Usuario } from '../entities/usuario';
import { DatosSileg, Sileg } from '../entities/sileg';

@Component({
  selector: 'app-seleccionar-usuario',
  templateUrl: './seleccionar-usuario.component.html',
  styleUrls: ['./seleccionar-usuario.component.css']
})
export class SeleccionarUsuarioComponent implements OnInit {

  usuarios: DatosSileg[] = [];
  busqueda:string = "";
  usuarioSeleccionado: Usuario = null;
  busquedaActivada: boolean = false;

  constructor(private service: SilegService) {
  }

  ngOnInit() {
    this.buscarUsuarios();
  }

  actualizarBusqueda() : void {
    this.busquedaActivada = (this.busqueda.length > 3);
  }

  buscarUsuarios(): void {
    this.usuarioSeleccionado = null;
    this.usuarios = [];
    this.service.buscarUsuarios(this.busqueda)
      .subscribe(usuarios => {
        console.log(usuarios);
        this.usuarios = usuarios;
      });
  }

  onSelect(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
  }

}
