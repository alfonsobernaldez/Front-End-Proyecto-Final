import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './User/agregar/agregar.component';
import { AgregarMascotaComponent } from './mascota/agregar/agregarmascota.component';
import { ListadoComponent } from './User/listado/listado.component';
import { ModificarComponent } from './User/modificar/modificar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HistoricoComponent } from './mascota/historico/historico.component';
import { ListadoMascotaComponent } from './mascota/listado/listadomascota.component';
import { ModificarMascotaComponent } from './mascota/modificar/modificarmascota.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    ListadoComponent,
    ModificarComponent,
    HistoricoComponent,
    AgregarMascotaComponent,
    ListadoMascotaComponent,
    ModificarMascotaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
