import { Component } from '@angular/core';
import { FinanceGridComponent } from './finance-grid/finance-grid.component';

@Component({
  selector: 'app-root',
  imports: [FinanceGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-finance';
}
