import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';
import { ServiceCoches } from 'src/app/services/service.coches';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {
  public coches!: Array<Coche>;

  constructor(private _service: ServiceCoches) {}
  ngOnInit(): void {
    this._service.getCoches().subscribe(response => {
      this.coches = response;
    })
  }
}
