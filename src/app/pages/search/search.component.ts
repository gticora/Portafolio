import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagenesService } from '../../services/imagenes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public imagenesService: ImagenesService ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( params => {
        this.imagenesService.buscarImagenes( params.termino );
      });

  }

}
