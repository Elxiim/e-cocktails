import { Component, Input } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent {
  public cocktail!: Cocktail | any;

  constructor(
    private panierService: PanierService,
    private activatedRouted: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index !== null) {
        this.cocktailService
          .getCocktail(+index)
          .subscribe((cocktail: Cocktail) => {
            this.cocktail = cocktail;
          });
      }
    });
  }

  addToPanier() {
    this.panierService.addToCart(this.cocktail.ingredients);
  }
}
