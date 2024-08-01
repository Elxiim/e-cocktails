import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent {
  cocktails: Cocktail[] = [
    {
      name: 'Margarita',
      img: './assets/images/margarita.webp',
      description:
        'Le cocktail Margarita classique a été l’un des cocktails les plus populaires en Amérique pendant des années et reste toujours un des premiers choix des clients. Bien qu’il existe de nombreuses variantes, la recette traditionnelle se compose de Tequila, Triple Sec et jus de citron vert. Il est également souvent servi avec un rebord de sel pour un parfait équilibre entre sucré, acide et salé.',
    },
    {
      name: 'Cosmopolitan',
      img: './assets/images/cosmopolitan.webp',
      description:
        'Devenu populaire dans les années 1990 grâce à la série télévisée à succès « Sex and the City », le délicieusement doux Cosmopolitan mérite définitivement sa place sur notre carte des cocktails les plus célèbres du monde ! Associant la vodka, le Cointreau et du jus de canneberge et traditionnellement servi dans un verre de Martini, le Cosmo est le cocktail préféré de nombreux amateurs de glamour.',
    },
    {
      name: 'Daiquiri',
      img: './assets/images/daiquiri.jpg',
      description:
        'Quand vous pensez au Daiquiri, votre esprit voyage vers les plages de sable blanc de Cuba surplombées par un ciel bleu clair. Bien qu’il puisse sembler un cocktail parmi les plus adaptés à une escapade tropicale, le Daiquiri est en fait le cocktail au rhum le plus commandé dans les pubs et les bars du monde entier.',
    },
    {
      name: 'Gimlet',
      img: './assets/images/margarita.webp',
      description:
        'Le Gimlet est un cocktail simple qui combine le gin et le citron vert pour créer une boisson ultra-rafraîchissante qui a résisté à l’épreuve du temps et est devenu l’un des cocktails les plus populaires. Avec sa saveur acérée, le Gimlet a une saveur incomparable, et est idéal pour être siroté pendant les chaudes soirées d’été.',
    },
  ];

  selectedCocktail!: Cocktail;

  ngOnInit() {
    this.selectedCocktail = this.cocktails[0];
  }

  getCocktail(index: number) {
    this.selectedCocktail = this.cocktails[index];
  }
}
