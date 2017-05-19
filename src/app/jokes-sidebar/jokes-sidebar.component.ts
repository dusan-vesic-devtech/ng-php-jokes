import { Component, OnInit } from '@angular/core';
import { JokesServiceService } from '../jokes-service';

@Component({
  selector: 'jokes-sidebar',
  template: `
    <div>
      jokes-sidebar Works!
      <table class="table">
        <thead></thead>
        <tbody>
          <tr *ngFor="let joke of jokes"><td>{{joke.title}}</td></tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    div {
      padding-left: 1em;
    }
  `]
})
export class JokesSidebarComponent implements OnInit {
  jokes = <any>[];

  constructor(private _jokesSerive: JokesServiceService) { }

  ngOnInit() {
    this.jokes = this._jokesSerive.getJokes();
  }

}
