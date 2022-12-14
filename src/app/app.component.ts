import { Component, OnInit } from '@angular/core';

import { Jsep } from 'jsep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'issues-reproduction-app';

  ngOnInit() {
    const parse_tree = Jsep.parse('1 + 1');
    console.log(parse_tree);
  }
}
