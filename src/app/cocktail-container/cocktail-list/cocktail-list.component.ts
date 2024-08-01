import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../../interfaces/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  @Input() cocktails?: Cocktail[];
  @Output() singleItem: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  getSingleCocktail(index: number) {
    this.singleItem.emit(index);
  }
}
