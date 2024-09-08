import { Component } from '@angular/core';
import { Cocktail } from './shared/interfaces/cocktail';
import { HttpClient } from '@angular/common/http';
import { CocktailService } from './shared/services/cocktail.service';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-cocktails';

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktailService.fetchCocktails().subscribe();

    console.log(environment);
  }
}
