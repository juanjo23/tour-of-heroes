import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor( public heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    this.selectedHero = this.heroes[Math.trunc(Math.random() * this.heroes.length)];
  }

  public onSelectHero(hero): void {
    this.selectedHero = hero;
  }

  public onHeroChanged(): void {
    this.heroService.saveHeroes();
  }

}
