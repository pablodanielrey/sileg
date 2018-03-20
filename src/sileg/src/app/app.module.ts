import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {HttpClientModule} from '@angular/common/http';


// configuro la autentificacion
import { OAuthModule } from 'angular-oauth2-oidc';


// aca se importa todo lo de material
import { MyMaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { SilegService } from './sileg.service';
import { AppRoutingModule } from './app-routing.module';

import { SeleccionarUsuarioComponent } from './usuarios/seleccionar-usuario/seleccionar-usuario.component';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';
import { ConfirmarGenerarClaveComponent } from './usuarios/generar-clave/confirmar-generar-clave.component';
import { GenerarClaveComponent   } from './usuarios/generar-clave/generar-clave.component';
import { GenerarDesignacionComponent } from './usuarios/generar-designacion/generar-designacion.component';
import { CreateComponent } from './usuarios/create/create.component';
import { CreateConfirmacionComponent } from './usuarios/create/create-confirmacion.component';
import { CrearCorreoComponent } from './usuarios/crear-correo/crear-correo.component';
import { DesignacionesComponent } from './usuarios/designaciones/designaciones.component';

import { ToogleFullscreenDirective } from './menu/toogle-fullscreen.directive';
import { MenuComponent } from './menu/menu/menu.component';
import { FooterComponent } from './menu/footer/footer.component';
import { HeaderComponent } from './menu/header/header.component';

import { LugaresComponent } from './lugares/lugares/lugares.component';
import { BuscarLugaresComponent } from './lugares/buscar-lugares/buscar-lugares.component';
import { DetalleLugarComponent } from './lugares/detalle-lugar/detalle-lugar.component';
import { CrearLugarComponent } from './lugares/crear-lugar/crear-lugar.component';
import { UsuariosPorOficinaComponent } from './lugares/usuarios-por-oficina/usuarios-por-oficina.component';
import { AgregarQuitarUsuariosComponent } from './lugares/agregar-quitar-usuarios/agregar-quitar-usuarios.component';

import { OidpGuard } from './oidp.guard';



@NgModule({
  declarations: [
    AppComponent,
    SeleccionarUsuarioComponent,
    DetalleUsuarioComponent,
    ConfirmarGenerarClaveComponent,
    GenerarClaveComponent,
    GenerarDesignacionComponent,
    CreateComponent,
    CreateConfirmacionComponent,
    CrearCorreoComponent,
    DesignacionesComponent,
    LugaresComponent,
    ToogleFullscreenDirective,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    BuscarLugaresComponent,
    DetalleLugarComponent,
    CrearLugarComponent,
    UsuariosPorOficinaComponent,
    AgregarQuitarUsuariosComponent
  ],
  entryComponents: [
    ConfirmarGenerarClaveComponent,
    CreateConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MyMaterialModule,
    AppRoutingModule,
    OAuthModule.forRoot()
  ],
  providers: [SilegService, OidpGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
