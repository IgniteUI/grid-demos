import { Component, ViewEncapsulation } from '@angular/core';
import { ErpHGridSampleComponent } from 'projects/erp-hgrid/src/app/erp-hgrid-sample/erp-hgrid-sample.component';

@Component({
  standalone: true,
  selector: 'erp-hgrid-view',
  templateUrl: './erp-hgrid-view.component.html',
  styleUrl: './erp-hgrid-view.component.scss',
  imports: [ErpHGridSampleComponent],
  encapsulation: ViewEncapsulation.Emulated
})
export class ErpHGridViewComponent {
}
