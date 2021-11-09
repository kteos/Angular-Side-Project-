import { Injectable } from '@angular/core';
import { Hero  } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this is to make http request and headers
import { catchError, map , tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,
    private http: HttpClient ) { 
// by passing it via constructor we then create messageSevice through injection 
/** here is a service in service scenario, message service is injected into hero service
*  which injected into Hero Component */

}


  private heroesUrl = 'api/heroes'; //this is the url to the web api

  getHeroes(): Observable<Hero[]> {
  //   // const heroes = of(Heroes);
  //   // this.log('Fetched Heroes'); this is the previous code 
  //   return heroes;

    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    );
   }

  getHero( id: number): Observable<Hero> {
    const hero = Heroes.find( h => h.id === id)!; //im not really too sure what the exclamation point is doing
    this.log(`fetched hero id: ${id}`);
    return of(hero);
  }

/** this handles error
 * it will let the app keep running 
 * @param operation - name of the operation that failed 
 * @param result - optional value to return as the observable result 
 */
  private handleError<T>(operation = 'operation', result?:T) {
    return (error: any): Observable<T> => {
      console.error(error); // this logs the error out to the console
      this.log(`${operation} failed: ${error.message}`);// this prints out using our message service 
      return of(result as T);// this returns an empty result of whatever type we are working with 
    }
  }




    //private method to write out messages
  private log( message:string) {
    this.messageService.add(`HeroService: ${message}`);

  }
}




 