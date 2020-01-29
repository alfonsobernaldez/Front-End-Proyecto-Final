import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Modelos/Mascota';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarMascotaComponent implements OnInit {

  mascota: Mascota;
  constructor(private router: Router, private http: MascotaService) {
    this.mascota = new Mascota();
   }

  ngOnInit() {
  }
  Guardar(){

    this.http.createMascota(this.mascota)
    .subscribe(datos=>{
      this.router.navigate(["listado"]);
    })
  }

}
