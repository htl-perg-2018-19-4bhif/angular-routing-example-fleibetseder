import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';


interface IPokemon{
  name: String;
  url: String;
}

interface IPokemons{
  count: number;
  results: IPokemon[];
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: IPokemons;
  dataSource: IPokemon[];
  displayedColumns: string[] = ['name','details'];

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.loadPokemons();
  }

  async loadPokemons(){
    this.pokemons = await this.http.get<IPokemons>('https://pokeapi.co/api/v2/pokemon?limit=1000').toPromise();
    this.dataSource = this.pokemons.results;
    
    
  }

}
