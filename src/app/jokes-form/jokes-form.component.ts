import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

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

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onJokeSubmit(title, content) {
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .map(res => res.json())
      // .subscribe(() => {
      //   console.log('Ok');
      // })
    console.log(title.value, content.value);
    this.sendToServer(title.value, content.value)
      .subscribe(res => console.log(res));
    title.value = '';
    content.value = '';
  }

  sendToServer(title, content) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8000/getJokes.php', { title, content }, options)
                    // .map(res => res.text);
                    // .do(() => { console.log('ok')})
                    // .catch(this.handleError);
  }
}
