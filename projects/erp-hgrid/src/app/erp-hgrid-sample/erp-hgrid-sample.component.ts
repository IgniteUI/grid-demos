import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  IgxHierarchicalGridComponent,
  IgxColumnGroupComponent,
  IgxColumnComponent,
  IgxCellTemplateDirective,
  IgxRowIslandComponent,
  GridSelectionMode,
  IgxTooltipDirective,
  IgxTooltipTargetDirective,
  IgxIconComponent,
  IgxCollapsibleIndicatorTemplateDirective,
  IgxGridToolbarComponent,
  IgxGridToolbarActionsComponent,
  IgxGridToolbarHidingComponent,
  IgxGridToolbarPinningComponent,
  IgxGridToolbarExporterComponent,
  IgxGridToolbarAdvancedFilteringComponent,
  IgxGridToolbarTitleComponent,
  IgxIconModule,
  IgxIconService,
  IgxBadgeModule,
  IgxBadgeComponent,
  SortingDirection,
  DefaultSortingStrategy,
  IgxExporterEvent,
  IColumnExportingEventArgs,
  IgxButtonModule,
	IgxDialogModule,
	IgxRippleModule,
  AutoPositionStrategy,
  IgxDialogComponent,
  IgxTooltipModule,
  PositionSettings,
  HorizontalAlignment,
  VerticalAlignment,
  THEME_TOKEN,
  ThemeToken,
  IgxGridToolbarDirective
} from 'igniteui-angular';
import { IgxSparklineModule } from 'igniteui-angular-charts';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { dropbox, delivery, billPaid, check } from '@igniteui/material-icons-extended';
import { OrderDetails, OrderStatus, TemplateDataModel } from '../data/dataModels';
import { SalesTrendsChartComponent } from '../sales-trends-chart/sales-trends-chart.component';
import { ErpDataService } from '../services/erp-data.service';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-erp-hgrid-sample',
    standalone: true,
    providers: [
      {
        provide: THEME_TOKEN,
        useFactory: () => {
          return new ThemeToken('material');
        },
      },
    ],
    imports: [
      IgxHierarchicalGridComponent,
      IgxColumnComponent,
      IgxCellTemplateDirective,
      IgxRowIslandComponent,
      IgxTooltipTargetDirective,
      IgxTooltipDirective,
      IgxIconComponent,
      IgxCollapsibleIndicatorTemplateDirective,
      IgxColumnGroupComponent,
      IgxGridToolbarComponent,
      IgxGridToolbarActionsComponent,
      IgxGridToolbarHidingComponent,
      IgxGridToolbarPinningComponent,
      IgxGridToolbarExporterComponent,
      IgxGridToolbarDirective,
      IgxGridToolbarAdvancedFilteringComponent,
      IgxGridToolbarTitleComponent,
      IgxIconModule,
      IgxBadgeModule,
      IgxBadgeComponent,
      NgIf,
      IgxSparklineModule,
      IgxButtonModule,
	    IgxDialogModule,
	    IgxRippleModule,
      IgxTooltipModule,
      SalesTrendsChartComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './erp-hgrid-sample.component.html',
    styleUrl: './erp-hgrid-sample.component.scss'
})
export class ErpHGridSampleComponent implements AfterViewInit {
  @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true })
  public hierarchicalGrid!: IgxHierarchicalGridComponent;
  @ViewChild('rowisland', { read: IgxRowIslandComponent, static: true })
  public rowisland!: IgxRowIslandComponent;
  @ViewChild('imageElement', { static: true }) imageElement!: ElementRef;
  @ViewChild('imageDialog', { static: true }) imageDialog!: IgxDialogComponent;

  public hgridData: TemplateDataModel[];
  public selectionMode: GridSelectionMode = 'multiple';
  public orderStatus = OrderStatus;

  constructor(
    private iconService: IgxIconService,
    private erpDataService: ErpDataService
  ) {
    // data
    this.hgridData = this.erpDataService.getProducts();
    const x = this.erpDataService.getProductsJson();

    // Icons used
    this.iconService.addSvgIconFromText(dropbox.name, dropbox.value, 'imx-icons');
    this.iconService.addSvgIconFromText(delivery.name, delivery.value, 'imx-icons');
    this.iconService.addSvgIconFromText(billPaid.name, billPaid.value, 'imx-icons');
    this.iconService.addSvgIconFromText(check.name, check.value, 'imx-icons');
  }

  public ngAfterViewInit(): void {
    // Default sortings
    this.hierarchicalGrid.sortingExpressions = [
        {
            dir: SortingDirection.Asc, fieldName: 'sku',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance()
        }
    ];
    this.rowisland.sortingExpressions = [
      {
          dir: SortingDirection.Desc, fieldName: 'delivery.dateOrdered',
          ignoreCase: true, strategy: DefaultSortingStrategy.instance()
      }
    ];
  }

  public getTooltipText(expanded: any): string {
    return expanded ?
      'The column is expanded! Click here to collapse.' : 'The column is collapsed! Click here to expand';
  }

  public formatDate(value: string): string {
    return value || 'N/A';
  }

  public formatAddress(value: OrderDetails): string {
    return `${value.streetName} ${value.streetNumber}`;
  }

  public formatNumberAsIs(value: number): number {
    // Bypassing the default formatting of larger numbers
    // Example for 4-digit numbers: 1,234 => 1234
    return value;
  }

  public exportStarted(args: IgxExporterEvent): void {
    args.exporter.columnExporting.subscribe((columnArgs: IColumnExportingEventArgs) => {
      // Don't export Performance column
      columnArgs.cancel = columnArgs.header === 'Performance';
    });
  }

  public onImageHover(event: MouseEvent, dialog: IgxDialogComponent) {
    if(dialog) {
      const targetEl = event.target as HTMLElement;

      const positionSettings: PositionSettings = {
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Top
      };

      dialog.open({
        target: targetEl,
        modal: false,
        positionStrategy: new AutoPositionStrategy(positionSettings)
      });
    }
  }

  public onImageLeave(event: MouseEvent, dialog: IgxDialogComponent) {
    if(dialog) {
      dialog.close();
    }
  }
}
