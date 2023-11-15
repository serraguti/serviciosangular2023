import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
//NECESITAMOS DEVOLVER OBJETOS Observable
//DICHA LIBRERIA ESTA DENTRO DE rxjs
import {Observable} from 'rxjs';
import { Global } from "../global";
import { environment } from "src/environments/environment";

@Injectable()
export class ServicePersonas{
    //EN EL CONSTRUCTOR, DEBEMOS RECIBIR EL 
    //OBJETO HttpClient PARA REALIZAR LAS PETICIONES HTTP
    constructor(private _http: HttpClient) {}

    getPersonasPromesa(): Promise<any> {
        var request = "api/personas";
        var url = environment.urlApiPersonas + request;
        let promise = new Promise((resolve) => {
            this._http.get(url).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }

    //LOS METODOS GET DEVOLVERAN Observable
    getPersonas(): Observable<any> {
        var urlApiPersonas = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        //TENEMOS DOS FORMAS DE TRABAJAR CON LOS SERVICIOS Y SUS PROMESAS
        //1) IGUAL QUE EN VUE, CREAR UNA PROMESA AQUI EN ESTE METODO 
        //Y DEVOLVER LOS DATOS QUE EXTRAEMOS DE DICHA PROMESA
        //2) DEVOLVER DIRECTAMENTE LA PROMESA PARA QUE EL COMPONENT SE SUBSCRIBA
        return this._http.get(urlApiPersonas);
    }
}