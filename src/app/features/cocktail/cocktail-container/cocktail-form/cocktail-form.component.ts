import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { first } from 'rxjs';
import { Cocktail } from 'src/app/shared/interfaces/cocktail';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss'],
})
export class CocktailFormComponent {
  public cocktailForm!: FormGroup;

  public singleCocktail!: Cocktail | any;

  get ingredients() {
    return this.cocktailForm.get('ingredients') as any;
  }

  constructor(
    private fb: FormBuilder,
    private cocktailService: CocktailService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index')!;
      if (index !== null) {
        this.cocktailService
          .getCocktail(+index)
          .pipe(first())
          .subscribe((cocktail: Cocktail) => {
            this.singleCocktail = cocktail;
            this.initForm(this.singleCocktail);
          });
      } else {
        this.initForm();
      }
    });
  }

  private initForm(
    cocktail: Cocktail = { name: '', description: '', img: '', ingredients: [] }
  ) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.fb.array(
        cocktail.ingredients.map((ingredient) =>
          this.fb.group({
            name: [ingredient.name, Validators.required],
            quantity: [ingredient.quantity, Validators.required],
          })
        ),
        Validators.required
      ),
    });
  }

  public addIngredient() {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: [0, Validators.required],
      })
    );
  }

  public submit() {
    // Edit cocktail
    if (this.singleCocktail) {
      this.cocktailService
        .editCocktail(this.singleCocktail._id, this.cocktailForm.value)
        .subscribe();
    } else {
      this.cocktailService.addCocktail(this.cocktailForm.value).subscribe();
    }

    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
