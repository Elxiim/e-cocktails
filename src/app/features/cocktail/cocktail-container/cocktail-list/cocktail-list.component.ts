import { Component, Input } from '@angular/core';
import { Cocktail } from 'src/app/shared/interfaces/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent {
  @Input() cocktails!: Cocktail[];

  search = '';

  constructor() {}

  ngOnInit() {}
}
