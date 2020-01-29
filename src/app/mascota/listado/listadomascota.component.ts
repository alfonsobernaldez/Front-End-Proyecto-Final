import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Modelos/Mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoMascotaComponent implements OnInit {
  mascota: Mascota[];


  constructor(private http: MascotaService, private router: Router) { }

  ngOnInit() {
    this.http.getMascota()
      .subscribe(datos => {
        this.mascota = datos;
      });
  }
  Editar(mascota: Mascota): void {
    localStorage.setItem("id", mascota.id.toString());
    this.router.navigate(["modificarm"]);
  }
  Eliminar(mascota: Mascota) {
    this.http.deleteMascota(mascota)
      .subscribe(datos => {
        this.mascota = this.mascota.filter(m => m != mascota);
        alert("eliminado");
        this.router.navigate(["mascota"]);
      });
  }
}
