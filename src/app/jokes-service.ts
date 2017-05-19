import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Joke } from './joke';

@Injectable()
export class JokesServiceService {

  constructor() { }

  getJokes(): Array<Joke> {
    return [
      {title: 'Joke 1'},
      {title: 'Joke 2'},
      {title: 'Joke 3'},
      {title: 'Joke 4'},
    ]
  }
}
