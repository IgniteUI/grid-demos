import { Component } from '@angular/core';
import { SalesGridComponent } from './sales-grid/sales-grid.component';

@Component({
  selector: 'app-root',
  imports: [ SalesGridComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
