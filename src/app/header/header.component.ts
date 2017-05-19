import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jokes-header',
  template: `
    <nav class="nav">
      <a class="nav-item">
        item 1
      </a>
      <a class="nav-item">
        item 2
      </a>
      <a class="nav-item">
        item 3
      </a>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
