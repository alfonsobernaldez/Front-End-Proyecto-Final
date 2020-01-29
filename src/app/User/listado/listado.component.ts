import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelos/User';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  user: User[];


  constructor(private http: UserService, private router: Router) { }

  ngOnInit() {
    this.http.getUsersCompleto()
    .subscribe(datos => {this.user= datos;
    });
  }

Editar(user: User): void {
  localStorage.setItem( "id" , user.id.toString());
  this.router.navigate(["modificar"]);
}
Eliminar(user: User)
{
  this.http.deleteUser(user)
  .subscribe(datos => {
    this.user = this.user.filter(u => u != user);
    alert("eliminado");
    this.router.navigate(["listado"]);
    });



  }
}
