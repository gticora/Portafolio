import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imagenes } from '../interfaces/imagenes-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  cargando = true;
  tipo = true;
  cant: number;
  imagenes: Imagenes[] = [];
  imagenesfiltrado: Imagenes[] = [];
  imagenesfcate: Imagenes[] = [];
  valida: Imagenes[];
  constructor( private http: HttpClient) {
    this.cargarImagen();

  }


  // tslint:disable-next-line: typedef
  private cargarImagen(){
    this.http.get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25')
    .subscribe( (resp: Imagenes[]) => {
      this.imagenes = Object.values(resp);
      this.cargando = false;
      this.tipo = false;
    });
  }

  // tslint:disable-next-line: typedef
  cargarCate( value: string ){
    // tslint:disable-next-line: triple-equals
    this.http.get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25' + '&category=' + value)
    .subscribe( (resp: Imagenes[]) => {
      this.imagenesfcate = Object.values(resp);
      this.cargando = false;
      this.tipo = true;
    });
  }

  // tslint:disable-next-line: typedef
  buscarImagenes( termino: string ){
    this.http.get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25' + '&q=' + termino)
    .subscribe( (resp: Imagenes[]) => {
      this.imagenesfiltrado = Object.values(resp);
      this.valida = Object.values(this.imagenesfiltrado[2]);
      this.cant = this.valida.length;
    });
  }
}
