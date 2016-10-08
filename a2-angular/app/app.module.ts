import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { FormsModule }    from "@angular/forms";
import { HttpModule }    from "@angular/http";
// added for LocalStorage
import { CoolStorageModule } from "angular2-cool-storage";

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
    routing,
    CoolStorageModule
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
        // LocalStorageService // added for Local Storage
  ]
})
export class AppModule {
}


