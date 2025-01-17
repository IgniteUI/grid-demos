import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErpHGridSampleComponent } from './erp-hgrid-sample/erp-hgrid-sample.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, ErpHGridSampleComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
}
