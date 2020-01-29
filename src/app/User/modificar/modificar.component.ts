import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelos/User';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

user: User = new User;
  constructor(private router: Router, private http: UserService) { }

  ngOnInit() {
    this.Editar();
  }
  Editar() {

  let id = localStorage.getItem("id");
  this.http.getUserUnico(+id)
  .subscribe(datos => { this.user = datos; })
  }
  Actualizar(user: User) {

    this.http.updateUser(user)
    .subscribe(datos=>{ this.user=datos;
      this.router.navigate(["listado"]);
    })
  }

}
