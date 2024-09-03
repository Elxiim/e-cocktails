import { Component } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail';
import { CocktailService } from '../shared/services/cocktail.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  cocktails$: Observable<Cocktail[] | any> = this.cocktailService.cocktails$;

  constructor(private cocktailService: CocktailService) {}
}
