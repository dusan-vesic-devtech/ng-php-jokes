import { Component } from '@angular/core';
import { Joke } from './joke';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  joke: Joke = {
    title: 'my joke',
    content: 'my joke content'
  }

  setJoke(joke: Joke) {
    this.joke = joke;
    // console.log("Success setting");
  }
}
