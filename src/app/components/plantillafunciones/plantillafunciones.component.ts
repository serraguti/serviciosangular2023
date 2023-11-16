import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { ServicePlantillas } from 'src/app/services/service.plantillas';

@Component({
  selector: 'app-plantillafunciones',
  templateUrl: './plantillafunciones.component.html',
  styleUrls: ['./plantillafunciones.component.css']
})
export class PlantillafuncionesComponent implements OnInit {
  @ViewChild("selectfunciones") selectFuncionesRef!: ElementRef;
  public funciones!: Array<string>;
  public plantillas!: Array<Plantilla>;
  public seleccionados!: string;

  mostrarPlantilla(): void {
    var funciones = new Array<string>();
    this.seleccionados = "";
    for (var option of this.selectFuncionesRef.nativeElement.options){
      if (option.selected == true){
        this.seleccionados += option.value + ",";
        funciones.push(option.value);
      }
    }
    this._service.getPlantillaFunciones(funciones).subscribe(response => {
      this.plantillas = response;
    })
  }

  constructor(private _service: ServicePlantillas) {}
  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      this.funciones = response;
    })
  }
}
