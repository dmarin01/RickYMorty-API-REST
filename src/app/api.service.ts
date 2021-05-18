import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCliente: HttpClient) { }

  //Para traer a todos los personajes, sobre el objeto creado httpCliente, utilizo la propiedad GET para traerlos y entre parentesis la url oportuna.



  //Le indico a la funcion que retorna una Promise <any> 
  getPersonajes(pPage: number = 1): Promise<any> {

    return this.httpCliente.get(`https://rickandmortyapi.com/api/character/?page=${pPage}`).toPromise();

    //AL CREAR UNA PROMESA, RETORNO ENTERA LA PROMESA PARA PDOER GESTIONARLA FUERA, PORQUE SINO NO PUEDO SACAR LA INFORMACION DEL THEN Y CATCH DE ÉSTA.
  }
}
