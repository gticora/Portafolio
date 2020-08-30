import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagenes } from '../interfaces/imagenes-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

    cargando = true;
    imagenes: Imagenes[] = [];
  constructor( private http: HttpClient) {
    this.cargarImagen();

  }

  // tslint:disable-next-line: typedef
  private cargarImagen(){
    this.http.get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25')
    .subscribe( (resp: Imagenes[]) => {
      this.imagenes = Object.values(resp);
      setTimeout(() => {
        this.cargando = false;
      }, 2000);
    });
  }
}
