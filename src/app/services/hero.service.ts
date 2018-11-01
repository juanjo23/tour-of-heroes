import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from '../models/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[];
  private readonly HEROES_KEY: string = 'heroes';
  constructor(private messageService: MessageService, private localStorageService: LocalStorageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched heroes list');
    const localData: string = this.localStorageService.getItem(this.HEROES_KEY);
    this.heroes = localData ? JSON.parse(localData) : HEROES;
    return of(this.heroes);
  }

  saveHeroes(): void {
    this.localStorageService.setItem(this.HEROES_KEY, JSON.stringify(this.heroes));
  }
}
