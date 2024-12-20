import { Component } from '@angular/core';
import { FleetManagementGridComponent } from "./fleet-management-grid/fleet-management-grid.component";

@Component({
  selector: 'app-root',
  imports: [ FleetManagementGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'master-detail-grid';
}
