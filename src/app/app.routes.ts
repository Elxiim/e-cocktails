import { Routes } from '@angular/router';
import { CocktailContainerComponent } from './features/cocktail/cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './features/cocktail/cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './features/cocktail/cocktail-container/cocktail-form/cocktail-form.component';
import { PanierContainerComponent } from './features/panier/panier-container/panier-container.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'cocktails',
    pathMatch: 'full',
  },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      {
        path: 'new',
        component: CocktailFormComponent,
      },
      {
        path: ':index/edit',
        component: CocktailFormComponent,
      },
      {
        path: ':index',
        component: CocktailDetailsComponent,
      },
      {
        path: '',
        redirectTo: '0',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'panier',
    component: PanierContainerComponent,
  },
];
