import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; // weve imported our interface here 
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = []; // keep in mind that your import has to match the export name 

  selectedHero?: Hero;
  
constructor(private HeroService: HeroService , private messageService: MessageService) { 
    /**
     * you dont want to do too much work in constructors while you can call 
     * methods here its best practice to do it in the life cycle hook
     */
  }

  ngOnInit(): void {

    this.getHeroes();
  }

  onSelect(hero:Hero):void {
    this.messageService.clear(); // this was not included in the tutorial but added it for better user experience 
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent selected hero id: ${hero.id}`);
    /** make sure to use the backtick or else it will just read it as a string */
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }

}
