import { Component, OnInit } from '@angular/core';
import { ImagenesService } from '../../services/imagenes.service';
import { InfopaginaService } from '../../services/infopagina.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  categoria = '';
  constructor( public imagenesService: ImagenesService,
               public infoPagina: InfopaginaService) { }

    // tslint:disable-next-line: typedef
    buscarCategoria(event: any){
      this.categoria = event.target.value;
      this.imagenesService.cargarCate(this.categoria);
    }

  ngOnInit(): void {
  }

}
