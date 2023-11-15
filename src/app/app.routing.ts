import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { CochesComponent } from "./components/coches/coches.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "comics", component: LibreriaComponent},
    {path: "personas", component: PersonasapiComponent},
    {path: "coches", component: CochesComponent}
]

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);

