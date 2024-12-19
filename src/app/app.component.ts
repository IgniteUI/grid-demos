import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IgxChipComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, IgxChipComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GridDemos';
}
