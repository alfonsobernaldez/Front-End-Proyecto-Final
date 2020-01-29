import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './User/listado/listado.component';
import { AgregarComponent } from './User/agregar/agregar.component';
import { ModificarComponent } from './User/modificar/modificar.component';
import { ListadoMascotaComponent } from './mascota/listado/listadomascota.component';
import { ModificarMascotaComponent } from './mascota/modificar/modificarmascota.component';
import { AgregarMascotaComponent } from './mascota/agregar/agregarmascota.component';


const routes: Routes = [{

  path: 'listado',
  component: ListadoComponent

},
{ path: 'altauser',
  component: AgregarComponent

},
{ path: 'modificar',
  component: ModificarComponent

},
{ path: 'mascota',
  component: ListadoMascotaComponent

},
{ path: 'modificarm',
  component: ModificarMascotaComponent

},
{ path: 'altamascota',
  component: AgregarMascotaComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
