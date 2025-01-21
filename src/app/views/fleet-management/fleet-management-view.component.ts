import { Component, ViewEncapsulation } from '@angular/core';
import { FleetManagementGridComponent } from 'projects/fleet-management-grid/src/app/fleet-management-grid/fleet-management-grid.component';

@Component({
  standalone: true,
  selector: 'fleet-management-view',
  imports: [FleetManagementGridComponent],
  templateUrl: './fleet-management-view.component.html',
  styleUrl: './fleet-management-view.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class FleetManagementViewComponent {
}
