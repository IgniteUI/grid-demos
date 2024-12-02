import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import {
  IgxButtonDirective,
  IgxDropDownComponent,
  IgxDropDownItemComponent,
  IgxIconComponent,
  IgxPivotDataSelectorComponent,
  IgxPivotGridComponent,
  IgxToggleActionDirective,
  IPivotConfiguration,
  ISelectionEventArgs,
  IgxExcelExporterService,
  IgxCsvExporterService,
  IgxCsvExporterOptions,
  IgxExcelExporterOptions,
  IgxBaseExporter,
  IgxExporterOptionsBase,
  CsvFileTypes,
  IPivotUISettings,
  IgxPivotDateDimension,
  IgxColumnComponent,
  IgxCellHeaderTemplateDirective,
  IgxIconService,
  IgxStringFilteringOperand,
  IFilteringExpressionsTree,
  FilteringExpressionsTree,
  FilteringLogic
} from 'igniteui-angular';
import FLAGS from '../assets/flags.json'
import SALES_DATA from '../assets/SalesData.json';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, IgxPivotGridComponent, IgxPivotDataSelectorComponent, IgxButtonDirective, IgxIconComponent, IgxToggleActionDirective, IgxDropDownComponent, IgxDropDownItemComponent, IgxCellHeaderTemplateDirective ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(IgxPivotGridComponent, { static: true })
  public pivotGrid!: IgxPivotGridComponent;

  @ViewChild('countryColumn')
  public countryColumnTemplate!: TemplateRef<any>;

  public brandFilter = new FilteringExpressionsTree(FilteringLogic.Or, 'Brand');
  public bulgariaCountryFilter = new FilteringExpressionsTree(FilteringLogic.And);

  public fileName = 'SalesGridApp';
  public pivotUISettings: IPivotUISettings = { };
  public pivotConfigBrands: IPivotConfiguration = {
    columns: [
      {
        enabled: true,
        memberName: 'Country',
        displayName: 'Country'
      },
      {
        enabled: true,
        memberName: 'Brand',
        displayName: 'Brand',
        filter: this.brandFilter
      },
      {
        enabled: false,
        memberName: 'Store',
        displayName: 'Store'
      },
    ],
    rows: [
      new IgxPivotDateDimension({
        memberName: 'Date',
        displayName: 'All Periods',
        enabled: true
      },
      {
        fullDate: false,
        quarters: true,
        months: false,
      })
    ],
    values: [
      {
        enabled: true,
        member: 'Sale',
        displayName: 'Sales',
        aggregate: {
            key: 'SUM',
            aggregatorName: 'SUM',
            label: 'Sum'
        },
        dataType: 'currency',
        formatter: (value) => {
            return value ? '$' + value : undefined;
        }
      },
      {
        enabled: true,
        member: 'Cost',
        displayName: 'Profit',
        aggregate: {
            key: 'SUM',
            aggregator: function(members, data) {
              return data?.reduce((accumulator, value) => accumulator + (value.Sale - value.Cost), 0) || 0;
            },
            label: 'Sum'
        },
        dataType: 'currency',
        formatter: (value) => {
            return value ? '$' + value : undefined;
        }
      }
    ]
  };
  public pivotConfigStores: IPivotConfiguration = {
    columns: [
      new IgxPivotDateDimension({
        memberName: 'Date',
        displayName: 'Data',
        enabled: true
      },
      {
        months: false,
        fullDate: false,
        quarters: true
      })
    ],
    rows: [
      {
        memberName: 'Store',
        displayName: 'Store',
        enabled: true,
        width: "140px"
      },
      {
        memberName: 'Brand',
        displayName: 'Brand',
        enabled: true,
        width: "140px"
      }
    ],
    values: [
      {
        member: 'Sale',
        displayName: 'Sales',
        aggregate: {
            key: 'SUM',
            aggregatorName: 'SUM',
            label: 'Sum'
        },
        enabled: true,
        dataType: 'currency',
        formatter: (value) => {
            return value ? '$' + value : undefined;
        }
      },
      {
        member: 'Cost',
        displayName: 'Profit',
        aggregate: {
            key: 'SUM',
            aggregatorName: 'SUM',
            label: 'Sum'
        },
        enabled: true,
        dataType: 'currency',
        formatter: (value) => {
            return value ? '$' + value : undefined;
        }
      }
    ],
    filters: [
      {
        memberName: "Country",
        displayName: 'Country',
        filter: this.bulgariaCountryFilter,
        enabled: true
      }
    ]
  };

  public flagsData = FLAGS;
  public data = SALES_DATA;

  constructor(public iconService: IgxIconService, public excelExporter: IgxExcelExporterService, public csvExporter: IgxCsvExporterService) {
    var tree = new FilteringExpressionsTree(FilteringLogic.Or, 'Brand');
    tree.filteringOperands = [
      {
        condition: IgxStringFilteringOperand.instance().condition('equals'),
        fieldName: 'Brand',
        searchVal: 'HM'
      },
      {
        condition: IgxStringFilteringOperand.instance().condition('equals'),
        fieldName: 'Brand',
        searchVal: 'HM Home'
      },
    ];
    this.brandFilter.filteringOperands = [tree];
    this.bulgariaCountryFilter.filteringOperands = [
      {
        condition: IgxStringFilteringOperand.instance().condition('equals'),
        fieldName: 'Country',
        searchVal: 'Bulgaria'
      },
    ]
  }

  public onViewSelection(event: ISelectionEventArgs) {
    const newId = event.newSelection.id;
    if (newId === 'brands') {
      this.pivotGrid.pivotConfiguration = this.pivotConfigBrands;
    } else if (newId === 'stores') {
      this.pivotGrid.pivotConfiguration = this.pivotConfigStores;
    }
  }

  public onExportSelection(event: ISelectionEventArgs) {
    let options!: IgxExporterOptionsBase;
    let exporter!: IgxBaseExporter;
    const newId = event.newSelection.id;
    if (newId === 'csv') {
      options = new IgxCsvExporterOptions(this.fileName, CsvFileTypes.CSV);
      exporter = this.csvExporter;
    } else if (newId === 'excel') {
      options = new IgxExcelExporterOptions(this.fileName);
      exporter = this.excelExporter;
    }

    exporter.export(this.pivotGrid, options);
    event.cancel = true;
  }

  public onColumnInit(col: IgxColumnComponent) {
    var countryKeys = Object.keys(this.flagsData);
    if (countryKeys.includes(col.field)) {
      col.headerTemplate = this.countryColumnTemplate;
    }
  }
}
