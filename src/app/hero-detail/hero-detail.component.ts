import { Component, OnInit , Input } from '@angular/core'; // added input from angular core library to be able to make the property and input
import { Hero} from "../hero" // this is our interface 
import { ActivatedRoute } from '@angular/router'; // provides access to information about about the route associate with the component
import { Location } from '@angular/common'; // a service that is used to interact with the URL 
import { HeroService } from '../hero.service'; //importign the her service to get the hero we need 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input()hero?: Hero; // this states that we are inputting a property called hero of type Hero from out interface and is null or undefined initially 
  // we will input it from an external component 
  constructor( private route: ActivatedRoute,
                private heroService: HeroService,
                private location: Location ) {} 

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number( this.route.snapshot.paramMap.get('id')) ; // this gets the id param from the path and parses it to a number
    this.heroService.getHero( id ).subscribe(
      hero => this.hero = hero
    );

  }

}
