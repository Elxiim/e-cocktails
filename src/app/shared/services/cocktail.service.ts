import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Margarita',
      img: './assets/images/margarita.webp',
      description:
        'Le cocktail Margarita classique a été l’un des cocktails les plus populaires en Amérique pendant des années et reste toujours un des premiers choix des clients. Bien qu’il existe de nombreuses variantes, la recette traditionnelle se compose de Tequila, Triple Sec et jus de citron vert. Il est également souvent servi avec un rebord de sel pour un parfait équilibre entre sucré, acide et salé.',
      ingredients: [
        {
          name: 'Perrier',
          quantity: 1,
        },
        {
          name: 'Menthe',
          quantity: 4,
        },
        {
          name: 'Rhum',
          quantity: 3,
        },
      ],
    },
    {
      name: 'Cosmopolitan',
      img: './assets/images/cosmopolitan.webp',
      description:
        'Devenu populaire dans les années 1990 grâce à la série télévisée à succès « Sex and the City », le délicieusement doux Cosmopolitan mérite définitivement sa place sur notre carte des cocktails les plus célèbres du monde ! Associant la vodka, le Cointreau et du jus de canneberge et traditionnellement servi dans un verre de Martini, le Cosmo est le cocktail préféré de nombreux amateurs de glamour.',
      ingredients: [
        {
          name: 'Cranberry',
          quantity: 1,
        },
        {
          name: 'Citron',
          quantity: 4,
        },
        {
          name: 'Vodka',
          quantity: 3,
        },
      ],
    },
    {
      name: 'Daiquiri',
      img: './assets/images/daiquiri.jpg',
      description:
        'Quand vous pensez au Daiquiri, votre esprit voyage vers les plages de sable blanc de Cuba surplombées par un ciel bleu clair. Bien qu’il puisse sembler un cocktail parmi les plus adaptés à une escapade tropicale, le Daiquiri est en fait le cocktail au rhum le plus commandé dans les pubs et les bars du monde entier.',
      ingredients: [
        {
          name: 'Rhum blanc',
          quantity: 1,
        },
        {
          name: 'Citron vert',
          quantity: 2,
        },
        {
          name: 'Sirop de canne',
          quantity: 2,
        },
      ],
    },
    {
      name: 'Gimlet',
      img: './assets/images/Gimlet.webp',
      description:
        'Le Gimlet est un cocktail simple qui combine le gin et le citron vert pour créer une boisson ultra-rafraîchissante qui a résisté à l’épreuve du temps et est devenu l’un des cocktails les plus populaires. Avec sa saveur acérée, le Gimlet a une saveur incomparable, et est idéal pour être siroté pendant les chaudes soirées d’été.',
      ingredients: [
        {
          name: 'Garnish',
          quantity: 1,
        },
        {
          name: 'Ounces gin',
          quantity: 2,
        },
        {
          name: 'Ounce lime juice',
          quantity: 3,
        },
      ],
    },
    {
      name: 'Manhattan',
      img: './assets/images/manhattan.jpg',
      description:
        "La recette la plus répandue se compose d'un mélange à la cuillère, avec des glaçons, de 5 cl de whisky (traditionnellement du rye whisky à base de seigle, ou de bourbon), puis de 2 cl de vermouth rouge, et d'un trait d'amer.",
      ingredients: [
        {
          name: 'Blendend Scotch Whisky',
          quantity: 1,
        },
        {
          name: 'Vermouth rouge',
          quantity: 2,
        },
        {
          name: 'trait Bitter',
          quantity: 2,
        },
      ],
    },
    {
      name: 'Negroni',
      img: './assets/images/negroni.jpeg',
      description:
        'Le Negroni est un cocktail à base de gin, de vermouth rouge et de Campari. Il a été inventé à Florence (Italie) en 1919.',
      ingredients: [
        {
          name: 'Glaçon',
          quantity: 8,
        },
        {
          name: 'Vermouth rouge',
          quantity: 2,
        },
        {
          name: "Tranche d'orange",
          quantity: 0.5,
        },
      ],
    },
    {
      name: 'Old fashioned',
      img: './assets/images/old-fashioned.jpeg',
      description:
        "L'Old fashioned est un cocktail à servir en apéritif, composé d'un sucre imbibé d'amer auquel on ajoute du whisky. Il est traditionnellement servi avec un gros glaçon dans un verre à whisky de type tumbler auquel il a donné son nom : le verre old fashioned",
      ingredients: [
        {
          name: 'Teaspoon water',
          quantity: 8,
        },
        {
          name: 'Dashes bitters',
          quantity: 2,
        },
        {
          name: 'Sirop',
          quantity: 2,
        },
      ],
    },
  ]);

  selectedCocktail$: BehaviorSubject<any> = new BehaviorSubject(
    this.cocktails$.value[0]
  );

  getCocktail(index: number) {
    this.selectedCocktail$.next(this.cocktails$.value[index]);
  }

  constructor() {}
}
