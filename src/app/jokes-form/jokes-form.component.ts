import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jokes-form',
  template: `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Enter joke:
          </h1>
          <h2 class="subtitle">
            <div class="field">
              <label class="label">Title</label>
              <p class="control">
                <input #title class="input" type="text">
              </p>
            </div>
          </h2>
          <h2 class="subtitle">
            <div class="field">
              <label class="label">Content</label>
              <p class="control">
                <textarea #content class="textarea" placeholder=""></textarea>
              </p>
            </div>
          </h2>
          <a class="button is-success" (click)="onJokeSubmit(title, content)">Success</a>
        </div>
      </div>
    </section>
    <div>
  `,
  styles: []
})
export class JokesFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onJokeSubmit(title, content) {
    console.log(title.value, content.value);
    title.value = '';
    content.value = '';
  }
}
