import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kraken-styling-lib';

  constructor(private router: Router) {}

  navigate(path: string): void {
    this.router.navigate([path]);
  }
}
