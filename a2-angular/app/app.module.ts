import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { FormsModule }    from "@angular/forms";
import { HttpModule }    from "@angular/http";
import { LocalStorageService, LocalStorageSubscriber } from "angular2-localstorage/LocalStorageEmitter";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular2-in-memory-web-api";
import { InMemoryDataService }  from "./in-memory-data.service";

import { AppComponent }        from "./app.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroesComponent }     from "./heroes.component";
import { HeroService }         from "./hero.service";
import  { DashboardComponent } from "./dashboard.component";

import { routing } from "./app.routing";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    FormsModule,
    routing
  ],
  declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [
        HeroService // ,
        // LocalStorageService
  ]
})
export class AppModule {
  // constructor(storageService: LocalStorageService) {}
}


