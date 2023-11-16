import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment"

@Injectable()
export class ServicePlantillas{
    constructor(private _http: HttpClient){}

    getFunciones(): Observable<any>{
        var request = "api/plantilla/funciones";
        var url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }

    getPlantillaFuncion(funcion: string): Observable<any> {
        var request = "api/Plantilla/PlantillaFuncion/" + funcion;
        var url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }

    getPlantillaFunciones(funciones: Array<string>): Observable<any> {
        //?funcion=ENFERMERA&funcion=ENFERMERO&funcion=INTERINO
        //funcion=ENFERMERA
        //funcion=INTERINO
        var data = "";
        for (var funcion of funciones){
            data += "funcion=" + funcion + "&";
        }
        data = data.substring(0, data.length - 1);
        var request = "api/plantilla/plantillafunciones?" + data;
        var url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }
}