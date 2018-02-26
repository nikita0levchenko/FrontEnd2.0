import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import {AboutComponent} from './components/about.component';
import {HomeComponent} from './components/home.component';
import {TeamsComponent} from "./components/teams.component";
import {TournamentsComponent} from "./components/tournaments.component";
import {NotFoundComponent} from './components/not-found.component';

//Определение маршрутов
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'tournaments', component: TournamentsComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeamsComponent,
    TournamentsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
