import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ModificarComponent as ModificarDesignacionComponent } from './modules/designaciones/modificar/modificar.component';
import { SeleccionarLugaresComponent as SeleccionarLugaresDesignacionComponent } from './modules/designaciones/seleccionar-lugares/seleccionar-lugares.component';

import { SistemaComponent } from './core/sistema/sistema.component';
import { InicioComponent } from './modules/inicio/inicio.component';

import { PendientesComponent as MovimientosPendientesComponent } from './modules/designaciones/movimientos/pendientes/pendientes.component';
import { SeleccionarPersonaComponent as AltaMovimientoSeleccionarPersonaComponent } from './modules/designaciones/movimientos/crear/seleccionar-persona/seleccionar-persona.component';
import { ListarComponent as ListarDesignacionesComponent } from './modules/designaciones/listar/listar.component';


import { CrearPersonaComponent as AltaMovimientoCrearPersonaComponent } from './modules/designaciones/movimientos/crear/crear-persona/crear-persona.component';
import { AltaCargoComponent as AltaMovimientoAltaCargoComponent } from './modules/designaciones/movimientos/crear/alta-cargo/alta-cargo.component';

import { CrearComponent as BajaMovimientoCrearComponent } from './modules/designaciones/movimientos/baja/crear/crear.component';
import { EditarComponent as EditarMovimientoComponent } from './modules/designaciones/movimientos/editar/editar.component';

import { SeleccionarComponent as SeleccionarLugarComponent } from './modules/lugares/seleccionar/seleccionar.component';
import { DetalleComponent as DetalleLugarComponent } from './modules/lugares/detalle/detalle.component';

 

import { DebugComponent } from './core/debug/debug.component';
import { EjemploErrorComponent } from './modules/ejemplo-error/ejemplo-error.component';
import { OidpGuard } from './core/oauth2/oidp.guard';
import { LoaderComponent } from './core/loader/loader.component';
import { Oauth2Component } from './core/oauth2/oauth2.component';


//import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
//
//
//import { LoaderComponent } from './loader/loader.component';
//import { CreateComponent } from '../usuarios/create/create.component';
//import { CrearCorreoComponent } from '../usuarios/crear-correo/crear-correo.component';
//import { CargarCorreoComponent } from '../usuarios/cargar-correo/cargar-correo.component';
//import { SeleccionarUsuarioComponent } from '../usuarios/seleccionar-usuario/seleccionar-usuario.component';
//import { DetalleUsuarioComponent } from '../usuarios/detalle-usuario/detalle-usuario.component';
//import { GenerarClaveComponent } from '../usuarios/generar-clave/generar-clave.component';
//import { GenerarDesignacionComponent } from '../usuarios/generar-designacion/generar-designacion.component';
//
//import { LugaresComponent } from '../lugares/lugares/lugares.component';
//import { BuscarLugaresComponent } from '../lugares/buscar-lugares/buscar-lugares.component';
//import { CrearLugarComponent } from '../lugares/crear-lugar/crear-lugar.component';
//import { DetalleLugarComponent } from '../lugares/detalle-lugar/detalle-lugar.component';
//import { UsuariosPorOficinaComponent } from '../lugares/usuarios-por-oficina/usuarios-por-oficina.component';
//import { AgregarQuitarUsuariosComponent } from '../lugares/agregar-quitar-usuarios/agregar-quitar-usuarios.component';
//
//import { DesignacionesPorLugarComponent } from '../designacion/designaciones-por-lugar/designaciones-por-lugar.component';
//import { DetalleDesignacionComponent } from '../designacion/detalle-designacion/detalle-designacion.component';
//import { DesignacionesPorPersonaComponent } from '../designacion/designaciones-por-persona/designaciones-por-persona.component';
//
//import { DatosPersonalesComponent } from '../usuarios/creacion/personal/datos-personales/datos-personales.component';
//import { DatosCorreoComponent } from '../usuarios/creacion/personal/datos-correo/datos-correo.component';
//import { DatosDesignacionComponent } from '../usuarios/creacion/personal/datos-designacion/datos-designacion.component';
//import { FinComponent } from '../usuarios/creacion/personal/fin/fin.component';
//
//import { UsuariosSincComponent } from '../sinc/usuarios-sinc/usuarios-sinc.component';
//import { LoginSincComponent } from '../sinc/login-sinc/login-sinc.component';
//
//import { OidpGuard } from '../oauth2/oidp.guard';
//import { Oauth2Component } from '../oauth2/oauth2.component';
//import { ErrorComponent } from './error/error.component';
//import { PendientesComponent } from '../modules/designacion/pendientes/pendientes.component';

const routes: Routes = [

  /*
  { path: 'error/:error', component: ErrorComponent },
  { path: 'oauth2', component: Oauth2Component },
  { path: 'loader', component: LoaderComponent },
  {
    path: 'sistema',
    canActivate: [OidpGuard],
    component: SistemaComponent,
    children: [
      { path: 'inicial', component: PantallaPrincipalComponent },
      {
        path:'creacion',
        children: [
          {
            path:'personal',
            children: [
              { path:'datos-personales', component: DatosPersonalesComponent },
              { path:'datos-designacion', component: DatosDesignacionComponent },
              { path:'datos-correo', component: DatosCorreoComponent },
              { path:'fin', component: FinComponent }
            ]
          }
        ]
      },
      {
        path:'sinc',
        children: [
          { path:'usuarios', component: UsuariosSincComponent },
          { path:'login', component: LoginSincComponent }
        ]
      },      
      {
        path:'usuario',
        children: [
          { path:'buscar', component: SeleccionarUsuarioComponent },
          { path:'crear', component: CreateComponent },
          { path:'usuario/:id', component: DetalleUsuarioComponent },
          { path:'usuario/:id/reset-clave', component: GenerarClaveComponent },
          { path:'usuario/:id/generar-desig', component: GenerarDesignacionComponent },
          { path:'usuario/:id/crear-correo', component: CrearCorreoComponent },
          { path:'usuario/:id/cargar-correo', component: CargarCorreoComponent },
          { path:'usuario/:id/designaciones', component: DesignacionesPorPersonaComponent }
        ]
      },
      {
        path:'lugares',
        canActivate: [OidpGuard],
        children: [
          { path:'lugares', component: LugaresComponent },
          { path:'buscar', component: BuscarLugaresComponent },
          { path:'lugar/:id', component: DetalleLugarComponent },
          { path:'crear', component: CrearLugarComponent },
          { path:'lugar/:id/usuarios', component: UsuariosPorOficinaComponent },
          { path:'lugar/:id/usuarios/abm', component: AgregarQuitarUsuariosComponent },
          { path:'lugar/:id/designaciones', component: DesignacionesPorLugarComponent },

        ]
      },
      {
        path:'designaciones',
        children: [
          { path:'pendientes', component: PendientesComponent },
          { path:'detalle/:id', component: DetalleDesignacionComponent }

        ]
      }
    ]
  },
  */
 { path: 'debug', component: DebugComponent },
 { path: 'oauth2', component: Oauth2Component }, 
 { path: 'loader', component: LoaderComponent }, 
 {
    path:'sistema',
    canActivate: [OidpGuard],
    component: SistemaComponent,
    children: [
      { path: 'error', component: EjemploErrorComponent },
      { path: 'inicio', component: InicioComponent },
      {
        path: 'movimientos',
        children: [
          { path: 'editar/:mid', component: EditarMovimientoComponent },
          { path:'pendientes', component: MovimientosPendientesComponent },
          { 
            path: 'crear',
            children: [
              { path: 'seleccionar/:lid', component: AltaMovimientoSeleccionarPersonaComponent },
              { path: 'crear/:lid', component: AltaMovimientoCrearPersonaComponent },
              { path: 'alta/:lid/:pid', component: AltaMovimientoAltaCargoComponent }
            ] 
          }
        ]
      },
      {
        path: 'designaciones',
        children: [
          { 
            path: 'listar/:id', 
            component: ListarDesignacionesComponent,
            children: [
              { path: 'baja/:mid', component: BajaMovimientoCrearComponent }
            ]
          },
          { path: 'modificar/:id', component: ModificarDesignacionComponent},
          { path: 'seleccionar-lugar', component: SeleccionarLugaresDesignacionComponent }
        ]
      },
      {
        path: 'lugares',
        children: [
           { path: 'seleccionar', component: SeleccionarLugarComponent },
           { path: 'detalle/:lid', component: DetalleLugarComponent }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '/loader', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
