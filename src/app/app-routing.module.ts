import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './User/listado/listado.component';
import { AgregarComponent } from './User/agregar/agregar.component';
import { ModificarComponent } from './User/modificar/modificar.component';
import { AgregarMascotaComponent } from './mascota/agregar/agregarmascota.component';


const routes: Routes = [{

  path: 'listado',
  component: ListadoComponent

},
{ path: 'alta',
  component: AgregarComponent

},
{ path: 'modificar',
  component: ModificarComponent

},
{ path: 'mascota',
  component: AgregarMascotaComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
