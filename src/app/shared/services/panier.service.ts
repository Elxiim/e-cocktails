import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public ingredients$: BehaviorSubject<Ingredient[] | null> =
    new BehaviorSubject<Ingredient[] | null>(null);

  constructor() {}

  public addToCart(ingredients: Ingredient[]) {
    const currentValue = this.ingredients$.value;

    if (currentValue) {
      // Group ingredients by name
      const fullArray = [...currentValue, ...ingredients];
      const obj = fullArray.reduce((acc: { [key: string]: number }, value) => {
        if (acc[value.name]) {
          acc[value.name] += value.quantity;
        } else {
          acc[value.name] = value.quantity;
        }
        return acc;
      }, {});

      // Get final data
      const result = Object.keys(obj).map((key) => ({
        name: key,
        quantity: obj[key],
      }));

      this.ingredients$.next(result);
    } else {
      this.ingredients$.next(ingredients);
    }
  }
}
