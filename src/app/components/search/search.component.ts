import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private searchResult : Heroe[];
  private term: string;

  constructor( private _heroesService: HeroesService,
                private router : Router,
                private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.term = params['term'];
      this.searchResult = this._heroesService.searchHeroes(this.term);
    })

  }

  showHero( name:string ){
    let index = this._heroesService.getIndexOfHeroByName(name);
    if( index != -1){
      this.router.navigate(['/heroe',index]);
    }
  }
}
