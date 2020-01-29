import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End-Proyecto-Final';
  logueado = false;


listado = null;

  constructor(private http: UserService, private router: Router, private us: UserService) { }

  listadoUser() {

  this.router.navigate(['listado']);

}
alta() {

  this.router.navigate(['altauser']);

}
tablaMascota() {

  this.router.navigate(['mascota']);

  }
altamascota(){

  this.router.navigate(['altamascota']);
}

/*verListadoCompleto() {

    this.us.getUsersCompleto().subscribe(listado => {this.listado = listado});

}*/

}
