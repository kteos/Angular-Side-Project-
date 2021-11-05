import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.getHeroes(); // here we call the method to load our information 
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(1,5)
    );
    /** this method is returning an array of heroes from the service class and 
     * only getting the first five? 
     */

  }

}
