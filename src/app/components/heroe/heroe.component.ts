import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  private hero:Heroe;

  constructor( private activatedRoute : ActivatedRoute,
                private router: Router,
               private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
        if(this._heroesService.getHero(params['id']) != null){
            this.hero = this._heroesService.getHero(params['id']);
        }
    } )
  }

  back(){
    this.router.navigate(['/heroes']);
  }
}
