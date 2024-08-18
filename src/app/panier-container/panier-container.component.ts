import { Component } from '@angular/core';
import { Ingredient } from '../shared/interfaces/ingredient.interface';
import { ReplaySubject, Subscription } from 'rxjs';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss'],
})
export class PanierContainerComponent {
  public ingredients!: Ingredient[];
  public subscription!: Subscription;
  public destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private panierService: PanierService) {}

  ngOnInit() {
    this.subscription = this.panierService.ingredients$.subscribe(
      (ingredients: Ingredient[] | any) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
