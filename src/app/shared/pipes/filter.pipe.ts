import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Cocktail[], search: string): Cocktail[] {
    return value.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
