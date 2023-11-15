import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import {HttpClientModule} from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches/coches.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    ComicComponent,
    HomeComponent,
    MenuComponent,
    PersonasapiComponent,
    CochesComponent
  ],
  imports: [
    HttpClientModule
    , BrowserModule
    , FormsModule
    , routing
  ],
  providers: [appRoutingProvider
    , ServiceComics, ServicePersonas, ServiceCoches],
  bootstrap: [AppComponent]
})
export class AppModule { }
