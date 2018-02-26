import { Component} from '@angular/core';

@Component({
  selector: 'tournaments-app',
  template: `
    <h1 align="center"><i>О турнирах</i></h1>
    <p>Здесь будут появляться списки турниров</p>
  `,
  styles:[`
  h1{text-align: center}
    p{text-align: center}
  `]
})
export class TournamentsComponent{ }
