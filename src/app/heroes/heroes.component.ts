import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // weve imported our interface here 
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = []; // keep in mind that your import has to match the export name 

 
  
constructor(private HeroService: HeroService  ) { 
    /**
     * you dont want to do too much work in constructors while you can call 
     * methods here its best practice to do it in the life cycle hook
     */
  }

  ngOnInit(): void {

    this.getHeroes();
  }



  getHeroes(): void {
    this.HeroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

}
