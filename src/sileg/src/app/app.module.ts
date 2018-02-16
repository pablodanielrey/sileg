import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SilegService } from './sileg.service';
import { SeleccionarUsuarioComponent } from './seleccionar-usuario/seleccionar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { AppRoutingModule } from './/app-routing.module';
import { GenerarClaveComponent } from './generar-clave/generar-clave.component';


@NgModule({
  declarations: [
    AppComponent,
    SeleccionarUsuarioComponent,
    DetalleUsuarioComponent,
    GenerarClaveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SilegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
