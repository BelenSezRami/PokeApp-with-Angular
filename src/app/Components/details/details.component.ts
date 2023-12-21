import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../Services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  id: string

  constructor(
    private _route: ActivatedRoute,
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getParams()
  }

  getParams(): void {
    this._route.params.subscribe({
      next: (params) => { this.id = params['id'] }

    })
  }

}
