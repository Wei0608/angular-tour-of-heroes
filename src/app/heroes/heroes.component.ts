import { Component, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // 第一種可以透過Service取值的方法
  // heroService: HeroService = inject(HeroService);
  // constructor() {
  //   this.heroes = this.heroService.getHeroes();
  // }

  // 第二種透過Service取值的方法，官方建議
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
