import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EMPLOYEE_DATA } from '../data/localData';
import {
  IgxTreeGridComponent,
  IgxColumnComponent,
  IgxAvatarComponent,
  IgxPaginatorComponent,
  IgxGridToolbarComponent,
  IgxGridToolbarActionsComponent,
  IgxGridToolbarHidingComponent,
  IgxGridToolbarAdvancedFilteringComponent,
  IgxGridToolbarPinningComponent,
  IgxGridToolbarTitleComponent,
  IgxGridToolbarExporterComponent,
  IgxCellTemplateDirective,
  IgxIconComponent,
  IgxIconModule,
  IgxIconService,
  IgxIconButtonDirective,
  IgxButtonModule,
  SortingDirection,
  DefaultSortingStrategy,
  THEME_TOKEN,
  ThemeToken,
} from 'igniteui-angular';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hr-portal',
  templateUrl: './hr-portal.component.html',
  styleUrls: ['./hr-portal.component.scss'],
  standalone: true,
  providers: [
    {
      provide: THEME_TOKEN,
      useFactory: () => {
        return new ThemeToken('fluent');
      },
    },
  ],
  imports: [
    IgxTreeGridComponent,
    IgxColumnComponent,
    IgxAvatarComponent,
    IgxPaginatorComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarAdvancedFilteringComponent,
    IgxGridToolbarPinningComponent,
    IgxGridToolbarTitleComponent,
    IgxGridToolbarExporterComponent,
    IgxCellTemplateDirective,
    IgxIconModule,
    IgxIconComponent,
    IgxIconButtonDirective,
    IgxGridToolbarHidingComponent,
    IgxButtonModule,
    CommonModule,
  ],
})
export class HrPortalComponent implements OnInit {
  public localData: Employee[] = [];
  @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true })
  public treeGrid!: IgxTreeGridComponent;

  constructor(private iconService: IgxIconService) {}

  ngOnInit() {
    this.localData = EMPLOYEE_DATA;
    const icons = [
      {
        name: 'linkedIn',
        path: 'images/others/linkedin.svg',
        category: 'hr-icons',
      },
      {
        name: 'USA',
        path: 'images/countries/United States.svg',
        category: 'country-icons',
      },
      {
        name: 'CAN',
        path: 'images/countries/Canada.svg',
        category: 'country-icons',
      },
      {
        name: 'GBR',
        path: 'images/countries/United Kingdom.svg',
        category: 'country-icons',
      },
      {
        name: 'DEU',
        path: 'images/countries/Germany.svg',
        category: 'country-icons',
      },
      {
        name: 'FRA',
        path: 'images/countries/France.svg',
        category: 'country-icons',
      },
      {
        name: 'ESP',
        path: 'images/countries/Spain.svg',
        category: 'country-icons',
      },
      {
        name: 'ITA',
        path: 'images/countries/Italy.svg',
        category: 'country-icons',
      },
      {
        name: 'AUS',
        path: 'images/countries/Australia.svg',
        category: 'country-icons',
      },
      {
        name: 'JPN',
        path: 'images/countries/Japan.svg',
        category: 'country-icons',
      },
      {
        name: 'ARE',
        path: 'images/countries/uae.svg',
        category: 'country-icons',
      },
    ];

    icons.forEach((icon) => {
      this.iconService.addSvgIcon(icon.name, icon.path, icon.category);
    });
  }
}
