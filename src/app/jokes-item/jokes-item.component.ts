import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'jokes-item',
  template: `
    <div>
      Display Joke:
      <div>
        {{ joke.title }}
        <hr>
        {{ joke.content }}
      </div>
    </div>
  `,
  styles: []
})
export class JokesItemComponent implements OnInit {
  // @Input() joke: Joke;
  @Input() joke;// = 'flow';
  constructor() { }

  ngOnInit() {
    // this.joke = 'flow'
  }

}
