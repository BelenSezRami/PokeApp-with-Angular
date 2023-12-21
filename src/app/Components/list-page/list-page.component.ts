import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../Services/pokemon.service';
import { GLOBAL } from '../../Services/global';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {

  pokemonArr: any[] = []
  isLoading: boolean = true

  constructor(
    private _pokemonService: PokemonService
  ) { }

  getPokemon(): void {
    this.getData()
  }

  getData(): void {
    this._pokemonService.getPokemon(1017).subscribe({

      next: (data) => {
        this.pokemonArr = data.results

        for (let pokemon of this.pokemonArr) {
          pokemon.id = this.getPokeID(pokemon.url)
          pokemon.urlImage = GLOBAL.URL_IMAGES + pokemon.id + '.png'
        }
        this.isLoading = false
      },
      error: (error) => { },
      complete: () => { }
    })
  }

  ngOnInit(): void {
    this.getData()
  }

  getPokeID(url: string): string {
    return url.slice(34, -1)
  }

}
