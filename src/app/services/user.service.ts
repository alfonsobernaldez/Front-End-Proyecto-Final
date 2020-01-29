import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Modelos/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path: string;
  user: User;

  constructor(private http:HttpClient) {
    this.path= 'http://localhost:8080/users';
   }

   getUsersCompleto()
   {
     return this.http.get<User[]>(this.path);
   }
   createUser(user: User)
   {
     console.log("llegs:" + user.nombre);
     return this.http.post<User>(this.path, user);
   }
   getUserUnico(id: number)
   {
     return this.http.get<User>(this.path+"/"+id);
   }
   updateUser(user: User)
   {
     return this.http.put<User>(this.path+"/"+user.id,user);
   }
   deleteUser(user: User)
   {
   return this.http.delete<User>(this.path+"/"+user.id);
   }
}
