import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }
  search(pokemon: string) {

    this.pokemonService.getPokemon(pokemon).subscribe(pokemon => this.pokemon = pokemon);
  
  }

}
