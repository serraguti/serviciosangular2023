import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ServiceComics } from 'src/app/services/service.comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcionRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  public comics!: Array<Comic>;
  public comicFavorito!: Comic;

  //EN LOS CONSTRUCTORES NORMALMENTE SOLAMENTE SE UTILIZA LA 
  //INYECCION, NO LOS OBJETOS QUE RECIBE.  LAS ACCIONES
  //SE SUELEN REALIZAR DENTRO DE ngOnInit
  constructor(private _service: ServiceComics) {}

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

  modificarComic(event: number): void {
    var nombre = this.cajaNombreRef.nativeElement.value;
    var descripcion = this.cajaDescripcionRef.nativeElement.value;
    var imagen = this.cajaImagenRef.nativeElement.value;
    this.comics[event] = new Comic(nombre, imagen, descripcion);
  }

  insertarComic(): void {
    var titulo = this.cajaNombreRef.nativeElement.value;
    var descripcion = this.cajaDescripcionRef.nativeElement.value;
    var imagen = this.cajaImagenRef.nativeElement.value;
    var newComic = new Comic(titulo,imagen, descripcion);
    this.comics.push(newComic);
  }

  seleccionarFavorito( event: Comic ): void {
    this.comicFavorito = event;
  }

  eliminarComic( event: number ): void {
    this.comics.splice(event, 1);
  }
}
