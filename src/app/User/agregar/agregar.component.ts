import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Modelos/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  user: User;
  constructor(private router: Router, private http: UserService) {
    this.user = new User();
   }

  ngOnInit() {
  }
  Guardar(){

    this.http.createUser(this.user)
    .subscribe(datos=>{
      this.router.navigate(["listado"]);
    })
  }
}
