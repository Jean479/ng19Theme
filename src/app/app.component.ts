import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  // templateUrl: './app.component.html',
  template: '<app-dashboard />',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'monApp';
}
