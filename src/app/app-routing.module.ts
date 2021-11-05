import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // this is most likely the router library 
import { HeroesComponent } from './heroes/heroes.component'; // this is the whole hero component 
import { DashboardComponent } from './dashboard/dashboard.component'; //imported component to add path
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; //imported hero-detail component


const routes: Routes = [
  // a typical angular route has two properties the path and the component 
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard' , component: DashboardComponent}, // added path to dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}, // this is a redirect for a default path
  { path: 'detail/:id', component: HeroDetailComponent } //the colon indicates its a place holder 
];

@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes) // this adds RouterModule and it configures it with our routes set up it called forRoot because its configured at the app root level
  ],
  exports: [ // we export it so thats its available throughout the application 
    RouterModule
  ],
})
export class AppRoutingModule { }
