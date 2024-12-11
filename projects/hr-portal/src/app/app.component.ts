import { Component } from '@angular/core';
import { HrPortalComponent } from "./hr-portal/hr-portal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HrPortalComponent]
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
}
