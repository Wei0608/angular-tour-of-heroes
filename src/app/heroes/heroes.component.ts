import { Component, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {
  heroes: Hero[] = [];

  // 第一種可以透過Service取值的方法
  // heroService: HeroService = inject(HeroService);
  // constructor() {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // 第二種透過Service取值的方法，官方建議
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
