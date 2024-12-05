import { CommonModule, CurrencyPipe } from '@angular/common';
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
  IgxPivotDateDimension,
  IgxColumnComponent,
  IgxCellHeaderTemplateDirective,
  IgxStringFilteringOperand,
  FilteringExpressionsTree,
  FilteringLogic,
  IPivotValue
} from 'igniteui-angular';
import FLAGS from './data/flags.json'
import SALES_DATA from './data/SalesData.json';

export class IgxSaleProfitAggregate {
  public static totalProfit = (_, data: any[] | undefined) =>
    data?.reduce((accumulator, value) => accumulator + (value.Sale - value.Cost), 0) || 0;

  public static minProfit = (_, data: any[] | undefined) => {
      let min = 0;
      if (data?.length === 1) {
          min = data[0].Sale - data[0].Cost;
      } else if (data && data.length > 1) {
          const mappedData = data.map(x => x.Sale - x.Cost);
          min = mappedData.reduce((a, b) => Math.min(a, b));
      }
      return min;
  };

  public static maxProfit = (_, data: any[] | undefined) => {
      let max = 0;
      if (data?.length === 1) {
          max = data[0].Sale - data[0].Cost;
      } else if (data && data.length > 1) {
          const mappedData = data.map(x => x.Sale - x.Cost);
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
  styleUrl: './sales-grid.component.scss'
})
export class SalesGridComponent {
  @ViewChild(IgxPivotGridComponent, { static: true })
  public pivotGrid!: IgxPivotGridComponent;

  @ViewChild('countryColumn')
  public countryColumnTemplate!: TemplateRef<any>;

  public currencyPipe = new CurrencyPipe('en-US');
  public brandFilter = new FilteringExpressionsTree(FilteringLogic.Or, 'Brand');
  public bulgariaCountryFilter = new FilteringExpressionsTree(FilteringLogic.And);

  public fileName = 'SalesGridApp';
  public saleValue: IPivotValue = {
    enabled: true,
    member: 'Sale',
    displayName: 'Sales',
    aggregate: {
      key: 'SUM',
      aggregatorName: 'SUM',
      label: 'Sum'
    },
    formatter: (value, _, __) => {
      return this.currencyFormatter(value, 'Sale');
    }
  };
  public costValue: IPivotValue = {
    enabled: true,
    member: 'Cost',
    displayName: 'Profit',
    aggregate: {
      key: 'SUM',
      aggregator: IgxSaleProfitAggregate.totalProfit,
      label: 'Sum'
    },
    aggregateList: [
      {
        key: 'SUM',
        aggregator: IgxSaleProfitAggregate.totalProfit,
        label: 'Sum'
      },
      {
        key: 'MAX',
        aggregator: IgxSaleProfitAggregate.maxProfit,
        label: 'Max'
      },
      {
        key: 'MIN',
        aggregator: IgxSaleProfitAggregate.minProfit,
        label: 'Min'
      },
      {
        key: 'COUNT',
        aggregatorName: 'COUNT',
        label: 'Count'
      },
    ],
    formatter: (value, _, __) => {
      return this.currencyFormatter(value, 'Cost');
    }
  };
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
          fullDate: true,
          quarters: true,
          months: false,
        })
    ],
    values: [
      this.saleValue,
      this.costValue
    ]
  };
  public pivotConfigStores: IPivotConfiguration = {
    columns: [
      new IgxPivotDateDimension({
        memberName: 'Date',
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
      this.saleValue,
      this.costValue
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
  public data: any = SALES_DATA;

  constructor(public excelExporter: IgxExcelExporterService, public csvExporter: IgxCsvExporterService) {
    var multipleFilters = new FilteringExpressionsTree(FilteringLogic.Or, 'Brand');
    multipleFilters.filteringOperands = [
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
    this.brandFilter.filteringOperands = [multipleFilters];
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

  public currencyFormatter(value: any, field: string) {
    var valueConfig = this.pivotGrid.values.find(value => value.member === field);
    if (!valueConfig || valueConfig.aggregate.key === "COUNT") {
      return value;
    }
    return this.currencyPipe.transform(value, 'USD', 'symbol', '1.0-2');
  }
}
