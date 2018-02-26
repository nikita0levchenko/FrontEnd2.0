import { Component} from '@angular/core';

@Component({
  selector: 'teams-app',
  template: `
    <h1><i>Команды</i></h1>
    <p>Здесь будут появляться новости, о командах, а так же их список</p>
  `,
  styles:[`
    h1{text-align: center}
    p{text-align: center}
  `]
})
export class TeamsComponent{}
