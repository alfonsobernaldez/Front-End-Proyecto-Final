import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './Modelos/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End-Proyecto-Final';


listado = null;

  constructor(private http: UserService, private router: Router, private us: UserService) { }

  listadoUser() {

  this.router.navigate(['listado']);

}
alta() {

  this.router.navigate(['alta']);

}
tablaMascota() {

  this.router.navigate(['mascota']);

  }

/*verListadoCompleto() {

    this.us.getUsersCompleto().subscribe(listado => {this.listado = listado});

}*/

}
