import { Injectable } from '@angular/core';
import { Mascota } from '../Modelos/Mascota';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  mascota: Mascota;
  path: string;

  constructor(private http: HttpClient) {
    this.path = ' http://localhost:8080/mascotas'
   }

   getMascota()
   {
     return this.http.get<Mascota[]>(this.path);
   }
   createMascota(mascota: Mascota)
   {
     return this.http.post<Mascota>(this.path,mascota);
   }
   getMascotaUnica(id: number)
   {
     return this.http.get<Mascota>(this.path+"/"+id);
   }
   updateMascota(mascota: Mascota)
   {
     return this.http.put<Mascota>(this.path+"/"+mascota.id,mascota);
   }
   deleteMascota(mascota: Mascota)
   {
    console.log("llega al servicio");
   return this.http.delete<Mascota>(this.path+"/"+mascota.id);
   }}
