import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CoolLocalStorage } from "angular2-cool-storage";


import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: "my-dashboard",
  templateUrl: "app/dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  localStorage: CoolLocalStorage;
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    localStorage: CoolLocalStorage,
    private heroService: HeroService
    ) {
    this.localStorage = localStorage;
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
      let link = ["/detail", hero.id];
      this.router.navigate(link);
    }

}
