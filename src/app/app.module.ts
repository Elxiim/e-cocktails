// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectedDirective } from './shared/directives/selected.directive';

// routes
import { APP_ROUTES } from './app.routes';
import { CocktailModule } from './features/cocktail/cocktail.module';
import { PanierModule } from './features/panier/panier.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SelectedDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    CocktailModule,
    PanierModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
