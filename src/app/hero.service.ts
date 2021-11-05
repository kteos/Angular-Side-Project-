import { Injectable } from '@angular/core';
import { Hero  } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this is to make http request and headers

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.log('Fetched Heroes');
    return heroes;
  }

  getHero( id: number): Observable<Hero> {
    const hero = Heroes.find( h => h.id === id)!; //im not really too sure what the exclamation point is doing
    this.log(`fetched hero id: ${id}`);
    return of(hero);
  }

  constructor(private messageService: MessageService,
              private http: HttpClient ) { 
    // by passing it via constructor we then create messageSevice through injection 
/** here is a service in service scenario, message service is injected into hero service
 *  which injected into Hero Component */

  }

    //private method to write out messages
  private log( message:string) {
    this.messageService.add(`HeroService: ${message}`);

  }
}




 