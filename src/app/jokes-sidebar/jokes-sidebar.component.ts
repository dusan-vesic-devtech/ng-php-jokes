import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { JokesServiceService } from '../jokes-service';
import { Joke } from "../joke";
import { Http } from '@angular/http';

@Component({
  selector: 'jokes-sidebar',
  template: `
    <div>
      Jokes List:
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
  @Input() jokes = <any>[];
  @Output() ee: EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor(
    private _jokesSerive: JokesServiceService,
    private http: Http
  ) { }

  ngOnInit() {
  }

  selectJoke(joke: Joke) {
    console.log(joke);
    this.ee.emit(joke)
  }
}
