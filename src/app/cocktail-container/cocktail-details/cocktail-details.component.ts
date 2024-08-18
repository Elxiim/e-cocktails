import { Component, Input } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/cocktail';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent {
  @Input() cocktail!: Cocktail;

  constructor(private panierService: PanierService) {}

  ngOnInit() {}

  addToPanier() {
    this.panierService.addToCart(this.cocktail.ingredients);
  }
}
