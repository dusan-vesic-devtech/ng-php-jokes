import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { JokesServiceService } from '../jokes-service';
import { Joke } from "../joke";

@Component({
  selector: 'jokes-sidebar',
  template: `
    <div>
      jokes-sidebar Works!
      <table class="table">
        <thead></thead>
        <tbody>
          <tr *ngFor="let joke of jokes"
              (click)="selectJoke(joke)"
            >
            <td>{{joke.title}}</td></tr>
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
  @Output() ee: EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor(private _jokesSerive: JokesServiceService) { }

  ngOnInit() {
    this.jokes = this._jokesSerive.getJokes();
  }

  selectJoke(joke: Joke) {
    console.log(joke);
    this.ee.emit(joke)
  }
}
