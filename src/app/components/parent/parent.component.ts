import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['test-page']);
  }

  onSubmit() {}
}
