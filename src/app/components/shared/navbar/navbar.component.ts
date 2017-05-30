import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {


  constructor( private router: Router ) {

  }

  ngOnInit() {
  }

  searchHero( term: string){
    console.log("To search: " + term);
    this.router.navigate(['search',term]);
  }

}