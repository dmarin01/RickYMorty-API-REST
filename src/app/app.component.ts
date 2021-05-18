import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personajes: any[];
  paginaActual: number;
  numPaginas: number;

  constructor(private apiService: ApiService) {
    this.paginaActual = 1;
  }


  ngOnInit() {
    //Al ser una promesa la resuelvo fuera de service, pudiendo utilizarla en el componente.
    this.apiService.getPersonajes()
      .then(response => {
        this.personajes = response.results;
        this.numPaginas = response.info.pages;
      })
      .catch(error => console.log(error));
  }

  async onClick(siguiente: boolean) {
    if (siguiente) {
      this.paginaActual++;
    } else {
      this.paginaActual--;
    }
    /*     this.apiService.getPersonajes(this.paginaActual)
          .then(respone => this.personajes = respone.results)
          .catch(error => console.log(error)); */

    //Convertirmos la promesa con asyn await

    // Coloco una const delante y añado al principio await. y poner async al principio de todo.

    const response = await this.apiService.getPersonajes(this.paginaActual);

    //ahora tengo que añadir a la variable personajes todos los resultadod para llenarla.

    this.personajes = response.results;

  }

}


