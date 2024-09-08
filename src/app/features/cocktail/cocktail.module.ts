import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    CocktailFormComponent,
    FilterPipe,
  ],

  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class CocktailModule {}
