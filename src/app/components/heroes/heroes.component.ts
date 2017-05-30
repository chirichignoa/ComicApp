import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router) {
    console.log("Ctor");
   }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  showHero( index:number ){
    this.router.navigate(['/heroe',index]);
  }

}
