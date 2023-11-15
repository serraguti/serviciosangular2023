import { Injectable } from "@angular/core";
import { Coche } from "../models/coche";
import {HttpClient} from '@angular/common/http';
import  {environment} from './../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class ServiceCoches {
    constructor(private _http: HttpClient) {}
    getCoches(): Observable<any> {
        var request = "webresources/coches";
        var url = environment.urlApiCoches + request;
        return this._http.get(url);
    }
}