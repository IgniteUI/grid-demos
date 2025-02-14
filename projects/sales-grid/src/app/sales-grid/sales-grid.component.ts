import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
  IgxPivotDateDimension,
  IgxColumnComponent,
  IgxCellHeaderTemplateDirective,
  IgxStringFilteringOperand,
  FilteringExpressionsTree,
  FilteringLogic,
  IPivotValue,
  THEME_TOKEN,
  ThemeToken
} from 'igniteui-angular';
import FLAGS from './data/flags.json'
import { DataService } from '../services/data.service';
import { BehaviorSubject } from 'rxjs';

export class IgxSaleProfitAggregate {
  public static totalProfit = (_, data: any[] | undefined) =>
    data?.reduce((accumulator, value) => accumulator + (value.sale - value.cost), 0) || 0;

  public static averageProfit = (_, data: any[] | undefined) => {
    let average = 0;
    if (data?.length === 1) {
      average = data[0].sale - data[0].cost;
    } else if (data && data.length > 1) {
        const mappedData = data.map(x => x.sale - x.cost);
        average = mappedData.reduce((a, b) => a + b) / mappedData.length;
    }
    return average;
  }

  public static minProfit = (_, data: any[] | undefined) => {
      let min = 0;
      if (data?.length === 1) {
          min = data[0].sale - data[0].cost;
      } else if (data && data.length > 1) {
          const mappedData = data.map(x => x.sale - x.cost);
          min = mappedData.reduce((a, b) => Math.min(a, b));
      }
      return min;
  };

  public static maxProfit = (_, data: any[] | undefined) => {
      let max = 0;
      if (data?.length === 1) {
          max = data[0].sale - data[0].cost;
      } else if (data && data.length > 1) {
          const mappedData = data.map(x => x.sale - x.cost);
          max = mappedData.reduce((a, b) => Math.max(a, b));
      }
      return max;
  };
}

@Component({
  standalone: true,
  selector: 'app-sales-grid',
  imports: [CommonModule, IgxPivotGridComponent, IgxPivotDataSelectorComponent, IgxButtonDirective, IgxIconComponent, IgxToggleActionDirective, IgxDropDownComponent, IgxDropDownItemComponent, IgxCellHeaderTemplateDirective],
  templateUrl: './sales-grid.component.html',
  providers: [
    {
      provide: THEME_TOKEN,
      useFactory: () => {
        return new ThemeToken('indigo');
      },
    },
  ],
  styleUrl: './sales-grid.component.scss'
})
export class SalesGridComponent implements OnInit{
  @ViewChild(IgxPivotGridComponent, { static: true })
  public pivotGrid!: IgxPivotGridComponent;

  @ViewChild('countryColumn')
  public countryColumnTemplate!: TemplateRef<any>;

  public currencyPipe = new CurrencyPipe('en-US');
  public brandFilter = new FilteringExpressionsTree(FilteringLogic.Or, 'brand');
  public bulgariaCountryFilter = new FilteringExpressionsTree(FilteringLogic.And);

  public fileName = 'SalesGridApp';
  public saleValue: IPivotValue = {
    enabled: true,
    member: 'sale',
    displayName: 'Sales',
    aggregate: {
      key: 'SUM',
      aggregatorName: 'SUM',
      label: 'Sum'
    },
    aggregateList: [
      {
        key: 'AVG',
        aggregatorName: 'AVG',
        label: 'Average'
      },
      {
        key: 'COUNT',
        aggregatorName: 'COUNT',
        label: 'Count'
      },
      {
        key: 'MAX',
        aggregatorName: 'MAX',
        label: 'Maximum'
      },
      {
        key: 'MIN',
        aggregatorName: 'MIN',
        label: 'Minimum'
      },
      {
        key: 'SUM',
        aggregatorName: 'SUM',
        label: 'Sum'
      },
    ],
    formatter: (value, _, __) => {
      return this.currencyFormatter(value, 'sale');
    }
  };
  public profitValue: IPivotValue = {
    enabled: true,
    member: 'cost',
    displayName: 'Profit',
    aggregate: {
      key: 'SUM',
      aggregator: IgxSaleProfitAggregate.totalProfit,
      label: 'Sum'
    },
    aggregateList: [
      {
        key: 'AVG',
        aggregator: IgxSaleProfitAggregate.averageProfit,
        label: 'Average'
      },
      {
        key: 'COUNT',
        aggregatorName: 'COUNT',
        label: 'Count'
      },
      {
        key: 'MAX',
        aggregator: IgxSaleProfitAggregate.maxProfit,
        label: 'Maximum'
      },
      {
        key: 'MIN',
        aggregator: IgxSaleProfitAggregate.minProfit,
        label: 'Minimum'
      },
      {
        key: 'SUM',
        aggregator: IgxSaleProfitAggregate.totalProfit,
        label: 'Sum'
      },
    ],
    formatter: (value, _, __) => {
      return this.currencyFormatter(value, 'cost');
    }
  };
  public pivotConfigBrands: IPivotConfiguration = {
    columns: [
      {
        enabled: true,
        memberName: 'country',
        displayName: 'Country'
      },
      {
        enabled: true,
        memberName: 'brand',
        displayName: 'Brand',
        filter: this.brandFilter
      },
      {
        enabled: false,
        memberName: 'store',
        displayName: 'Store'
      },
    ],
    rows: [
      new IgxPivotDateDimension({
        memberName: 'saleDate',
        displayName: 'All Periods',
        enabled: true
      },
        {
          fullDate: true,
          quarters: true,
          months: false,
        })
    ],
    values: [
      this.saleValue,
      this.profitValue
    ]
  };
  public pivotConfigStores: IPivotConfiguration = {
    columns: [
      new IgxPivotDateDimension({
        memberName: 'saleDate',
        displayName: 'All Periods',
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
        memberName: 'store',
        displayName: 'Store',
        enabled: true,
        width: "140px"
      },
      {
        memberName: 'brand',
        displayName: 'Brand',
        enabled: true,
        width: "140px"
      }
    ],
    values: [
      this.saleValue,
      this.profitValue
    ],
    filters: [
      {
        memberName: "country",
        displayName: 'Country',
        filter: this.bulgariaCountryFilter,
        enabled: true
      }
    ]
  };

  public flagsData = FLAGS;
  // public data: any = SALES_DATA;
  public data$: BehaviorSubject<any> = new BehaviorSubject([]);
  public isLoading = true;

  constructor(private dataService: DataService, public excelExporter: IgxExcelExporterService, public csvExporter: IgxCsvExporterService) {
    var multipleFilters = new FilteringExpressionsTree(FilteringLogic.Or, 'brand');
    multipleFilters.filteringOperands = [
      {
        condition: IgxStringFilteringOperand.instance().condition('equals'),
        fieldName: 'brand',
        searchVal: 'HM'
      },
      {
        condition: IgxStringFilteringOperand.instance().condition('equals'),
        fieldName: 'brand',
        searchVal: 'HM Home'
      },
    ];
    this.brandFilter.filteringOperands = [multipleFilters];
    this.bulgariaCountryFilter.filteringOperands = [
      {
        condition: IgxStringFilteringOperand.instance().condition('equals'),
        fieldName: 'country',
        searchVal: 'Bulgaria'
      },
    ]
  }

  public ngOnInit(): void {
    this.dataService.getData();
    this.data$ = this.dataService.records;
    this.data$.subscribe((data) => {
      if (data.length !== 0) {
        this.isLoading = false;
      }
    });
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

  public currencyFormatter(value: any, field: string) {
    var valueConfig = this.pivotGrid.values.find(value => value.member === field);
    if (!valueConfig || valueConfig.aggregate.key === "COUNT") {
      return value;
    }
    return this.currencyPipe.transform(value, 'USD', 'symbol', '1.0-2');
  }
}
