import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JokesServiceService {

  constructor() { }

  getJokes() {
    return [
      {title: 'Joke 1'},
      {title: 'Joke 2'},
      {title: 'Joke 3'},
      {title: 'Joke 4'},
    ]
  }
}
