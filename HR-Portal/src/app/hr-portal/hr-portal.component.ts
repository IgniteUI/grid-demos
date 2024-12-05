import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EMPLOYEE_DATA } from './localData';
import { IgxTreeGridComponent, IgxColumnComponent, IgxAvatarComponent, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent,
  IgxGridToolbarHidingComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent, IgxGridToolbarExporterComponent,
  IgxCellTemplateDirective, IgxIconComponent, IgxIconModule, IgxIconService, IgxIconButtonDirective, IgxButtonModule, RowType } from 'igniteui-angular';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hr-portal',
  templateUrl: './hr-portal.component.html',
  styleUrls: ['./hr-portal.component.scss'],
  standalone: true,
  imports: [IgxTreeGridComponent,
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
    CommonModule
    ]
})
export class HrPortalComponent implements OnInit {
  public localData: Employee[] = [];
  @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true })
  public treeGrid!: IgxTreeGridComponent;
  public formatOptions ={
    format: 'currency',
    timezone: 'GMT'
  }
  public rowStyles = {
    background: (row: RowType) => row.index % 2 === 0 ? 'rgba(255,255,255)' : ''
  };
  public rightAlign = {
    'text-align': 'right',
    'justify-content': 'end'
  };

  constructor(private iconService: IgxIconService, private http: HttpClient) { }

  ngOnInit() {
    this.localData = EMPLOYEE_DATA;
    const icons = [
      { name: 'linkedIn', path: 'assets/images/others/linkedin.svg', category: 'hr-icons' },
      { name: 'USA', path: 'assets/images/countries/United States.svg', category: 'country-icons' },
      { name: 'CAN', path: 'assets/images/countries/Canada.svg', category: 'country-icons' },
      { name: 'GBR', path: 'assets/images/countries/United Kingdom.svg', category: 'country-icons' },
      { name: 'DEU', path: 'assets/images/countries/Germany.svg', category: 'country-icons' },
      { name: 'FRA', path: 'assets/images/countries/France.svg', category: 'country-icons' },
      { name: 'ESP', path: 'assets/images/countries/Spain.svg', category: 'country-icons' },
      { name: 'ITA', path: 'assets/images/countries/Italy.svg', category: 'country-icons' },
      { name: 'AUS', path: 'assets/images/countries/Australia.svg', category: 'country-icons' },
      { name: 'JPN', path: 'assets/images/countries/Japan.svg', category: 'country-icons' },
      { name: 'ARE', path: 'assets/images/countries/uae.svg', category: 'country-icons' }
    ];

    icons.forEach(icon => {
      this.iconService.addSvgIcon(icon.name, icon.path, icon.category);
    });
  }
}
