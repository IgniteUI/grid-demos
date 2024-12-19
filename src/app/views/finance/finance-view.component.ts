import { Component, ViewEncapsulation } from '@angular/core';
import { FinanceGridComponent } from 'projects/finance-grid/src/app/finance-grid/finance-grid.component';

@Component({
  standalone: true,
  selector: 'finance-view',
  imports: [FinanceGridComponent],
  templateUrl: './finance-view.component.html',
  styleUrl: './finance-view.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class FinanceViewComponent {
}
