import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Modelos/Mascota';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarMascotaComponent implements OnInit {

  mascota:Mascota = new Mascota;

  constructor(private router:Router,private http: MascotaService) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){

  let id=localStorage.getItem("id");
  this.http.getMascotaUnica(+id)
  .subscribe(datos=>{this.mascota=datos;})
  }
  Actualizar(mascota: Mascota)
  {
    this.http.updateMascota(mascota)
    .subscribe(datos=>{
      this.mascota=datos;
      this.router.navigate(["mascota"]);
    })
  }

}
