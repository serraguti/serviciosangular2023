import { Component, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent {
  @ViewChild("cajanombre") cajaNombreRef!: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcionRef!: ElementRef;
  @ViewChild("cajaimagen") cajaImagenRef!: ElementRef;
  public comics: Array<Comic>;
  public comicFavorito!: Comic;

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

  constructor() {
    this.comics = [
      new Comic(
        "Spiderman",
        "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
        "Hombre araña"
      ),
      new Comic(
        "Wolverine",
        "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
        "Lobezno"
      ),
      new Comic(
        "Guardianes de la Galaxia",
        "https://www.eslahoradelastortas.com/blog/media/2016/08/guardianes-de-la-galaxia.jpg",
        "Yo soy Groot"
      ),
      new Comic(
      "Avengers",
      "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
      "Los Vengadores"
      ),
      new Comic(
      "Spawn",
      "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
      "Todd MacFarlane"
      )
    ]; 
  }
}
