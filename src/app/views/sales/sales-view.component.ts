import { Component, ViewEncapsulation } from '@angular/core';
import { SalesGridComponent } from 'projects/sales-grid/src/app/sales-grid/sales-grid.component';

@Component({
  standalone: true,
  selector: 'sales-view',
  imports: [SalesGridComponent],
  templateUrl: './sales-view.component.html',
  styleUrl: './sales-view.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class SalesViewComponent {
}
