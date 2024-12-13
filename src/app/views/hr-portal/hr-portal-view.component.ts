import { Component, ViewEncapsulation } from '@angular/core';
import { HrPortalComponent } from 'projects/hr-portal/src/app/hr-portal/hr-portal.component';

@Component({
  standalone: true,
  selector: 'hr-portal-view',
  templateUrl: './hr-portal-view.component.html',
  styleUrl: './hr-portal-view.component.scss',
  imports: [HrPortalComponent],
  encapsulation: ViewEncapsulation.Emulated
})
export class HrPortalViewComponent {
}
