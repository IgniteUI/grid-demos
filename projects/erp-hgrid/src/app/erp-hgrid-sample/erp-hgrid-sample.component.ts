import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
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
  IgxGridToolbarDirective,
  OverlaySettings,
  IgxStringFilteringOperand,
  IFilteringOperation
} from 'igniteui-angular';
import { fadeIn } from 'igniteui-angular/animations'
import { IgxSparklineModule } from 'igniteui-angular-charts';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { dropbox, delivery, billPaid, check } from '@igniteui/material-icons-extended';
import { OrderDetails, OrderStatus, TemplateDataModel } from '../data/dataModels';
import { SalesTrendsChartComponent } from '../sales-trends-chart/sales-trends-chart.component';
import { ErpDataService } from '../services/erp-data.service';
import { BehaviorSubject } from 'rxjs';
import { useAnimation } from '@angular/animations';

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
      CommonModule,
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
export class ErpHGridSampleComponent implements OnInit, AfterViewInit {
  @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true })
  public hierarchicalGrid!: IgxHierarchicalGridComponent;
  @ViewChild('rowisland', { read: IgxRowIslandComponent, static: true })
  public rowisland!: IgxRowIslandComponent;
  @ViewChild('imageElement', { static: true }) imageElement!: ElementRef;
  @ViewChild('imageDialog', { static: true }) imageDialog!: IgxDialogComponent;
  public fullAddressFilteringOperand = FullAddressFilteringOperand.instance();
  public shortAddressFilteringOperand = new FullAddressFilteringOperand(true);


  public selectionMode: GridSelectionMode = 'multiple';
  public orderStatus = OrderStatus;
  public data$: BehaviorSubject<TemplateDataModel[]> = new BehaviorSubject<TemplateDataModel[]>([]);
  public isLoading = true;

  constructor(
    private iconService: IgxIconService,
    private erpDataService: ErpDataService
  ) {
    // Icons used
    this.iconService.addSvgIconFromText(dropbox.name, dropbox.value, 'imx-icons');
    this.iconService.addSvgIconFromText(delivery.name, delivery.value, 'imx-icons');
    this.iconService.addSvgIconFromText(billPaid.name, billPaid.value, 'imx-icons');
    this.iconService.addSvgIconFromText(check.name, check.value, 'imx-icons');
  }

  public ngOnInit(): void {
    // data
    this.erpDataService.getProducts();
    this.data$ = this.erpDataService.records;
    this.data$.subscribe((data) => {
      if (data.length !== 0) {
        this.isLoading = false;
      }
    });
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
    return `${value.streetNumber} ${value.streetName}`;
  }

  public formatFullAddress(value: OrderDetails): string {
    return `${value.streetNumber} ${value.streetName}, ${value.zipCode} ${value.city}, ${value.country}`;
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
    if (dialog) {
      const targetEl = event.target as HTMLElement;

      const positionSettings: PositionSettings = {
        openAnimation: useAnimation(fadeIn, {
          params: {
            delay: '400ms'
          }
        }),
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Top
      };

      const overlaySettings: OverlaySettings = {
        target: targetEl,
        modal: false,
        positionStrategy: new AutoPositionStrategy(positionSettings)
      }
      dialog.open(overlaySettings);
    }
  }

  public onImageLeave(event: MouseEvent, dialog: IgxDialogComponent) {
    if(dialog) {
      dialog.close();
    }
  }
}

export class FullAddressFilteringOperand extends IgxStringFilteringOperand {
  public constructor(isAddressShort: boolean = false) {
    super();
    const getShortAddress = (target: any) => `${target.streetNumber} ${target.streetName}`;
    const getFullAddress = (target: any) => `${target.streetNumber} ${target.streetName}, ${target.zipCode} ${target.city}, ${target.country}`;

    // Rewriting filtering operations to work on the address field
    // as it is an object with properties
    // and we can't filter it like a normal string field
    const customOperations: IFilteringOperation[] = [
      {
        iconName: 'filter_contains',
        isUnary: false,
        logic: (target: any, searchVal: string, ignoreCase?: boolean) => {
          const address = isAddressShort ? getShortAddress(target) : getFullAddress(target);
          ignoreCase = true;
          const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
          target = IgxStringFilteringOperand.applyIgnoreCase(address, ignoreCase);
          return target.indexOf(search) !== -1;
        },
        name: 'Contains'
      },
      {
        iconName: 'filter_does_not_contain',
        isUnary: false,
        logic: (target: any, searchVal: string, ignoreCase?: boolean) => {
          const address = isAddressShort ? getShortAddress(target) : getFullAddress(target);
          ignoreCase = true;
          const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
          target = IgxStringFilteringOperand.applyIgnoreCase(address, ignoreCase);
          return target.indexOf(search) === -1;
        },
        name: 'Does Not Contain'
      },
      {
        iconName: 'filter_starts_with',
        isUnary: false,
        logic: (target: any, searchVal: string, ignoreCase?: boolean) => {
          const address = isAddressShort ? getShortAddress(target) : getFullAddress(target);
          ignoreCase = true;
          const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
          target = IgxStringFilteringOperand.applyIgnoreCase(address, ignoreCase);
          return target.startsWith(search);
        },
        name: 'Starts With'
      },
      {
        iconName: 'filter_ends_with',
        isUnary: false,
        logic: (target: any, searchVal: string, ignoreCase?: boolean) => {
          const address = isAddressShort ? getShortAddress(target) : getFullAddress(target);
          ignoreCase = true;
          const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
          target = IgxStringFilteringOperand.applyIgnoreCase(address, ignoreCase);
          return target.endsWith(search);
        },
        name: 'Ends With'
      },
      {
        iconName: 'filter_equal',
        isUnary: false,
        logic: (target: any, searchVal: string, ignoreCase?: boolean) => {
          const address = isAddressShort ? getShortAddress(target) : getFullAddress(target);
          ignoreCase = true;
          const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
          target = IgxStringFilteringOperand.applyIgnoreCase(address, ignoreCase);
          return target === search;
        },
        name: 'Equals'
      },
      {
        iconName: 'filter_not_equal',
        isUnary: false,
        logic: (target: any, searchVal: string, ignoreCase?: boolean) => {
          const address = isAddressShort ? getShortAddress(target) : getFullAddress(target);
          ignoreCase = true;
          const search = IgxStringFilteringOperand.applyIgnoreCase(searchVal, ignoreCase);
          target = IgxStringFilteringOperand.applyIgnoreCase(address, ignoreCase);
          return target !== search;
        },
        name: 'Does Not Equal'
      },
    ];

    const emptyOperators = [
        // 'Empty'
        this.operations[6],
        // 'Not Empty'
        this.operations[7],
        // 'Null'
        this.operations[8],
        // 'Not Null'
        this.operations[9],
    ];

    this.operations = customOperations.concat(emptyOperators);
  }
}
