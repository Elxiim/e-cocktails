import { Component } from '@angular/core';
import { Cocktail } from '../shared/interfaces/cocktail';
import { CocktailService } from '../shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  cocktails: Cocktail[] = [];

  subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe((cocktail: Cocktail[]) => {
        this.cocktails = cocktail;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
