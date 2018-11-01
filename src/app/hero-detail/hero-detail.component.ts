import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Output() save = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public onSave() {
    this.save.emit();
  }

}
