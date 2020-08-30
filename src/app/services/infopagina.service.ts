import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {
  info: InfoPagina = {};
  categoria: any[] = [];
  cargada = false;
  constructor( private http: HttpClient ) { 
    this.cargarInfo();
    this.cargarCategoria();
  }

  // tslint:disable-next-line: typedef
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

   // tslint:disable-next-line: typedef
   private cargarCategoria() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: any[]) => {
      this.categoria = Object.values(resp);
      // console.log(resp);
    });


    // this.equipo = resp
  }
}
