import { Component, OnInit , Input } from '@angular/core'; // added input from angular core library to be able to make the property and input
import { Hero} from "../hero" // this is our interface 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero; // this states that we are inputting a property called hero of type Hero from out interface and is null or undefined initially 
  // we will input it from an external component 
  constructor() { }

  ngOnInit(): void {
  }

}
