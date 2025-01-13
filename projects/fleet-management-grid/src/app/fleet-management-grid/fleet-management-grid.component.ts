import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { check, delivery, gitIssue, wrench } from '@igniteui/material-icons-extended';
import { DefaultSortingStrategy, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxButtonModule, IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCarouselComponent, IgxCellTemplateDirective, IgxColumnComponent, IgxDividerDirective, IgxGridComponent, IgxGridDetailTemplateDirective, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent, IgxIconComponent, IgxIconService, IgxLabelDirective, IgxOverlayService, IgxSelectComponent, IgxSelectItemComponent, IgxSlideComponent, IgxTabContentComponent, IgxTabHeaderComponent, IgxTabItemComponent, IgxTabsComponent, RelativePosition, RelativePositionStrategy, SortingDirection } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule, IgxDataChartInteractivityModule, IgxLegendDynamicModule, IgxPieChartModule, MarkerType } from 'igniteui-angular-charts';
import DATA from '../../assets/data.json';
import CAR_PHOTO_MANIFEST from '../../assets/car_photo_manifest.json';
import CAR_IMAGES from '../../assets/car_images.json'
import { IgxShapeDataSourceModule } from 'igniteui-angular-core';
import { IgxGeographicMapComponent, IgxGeographicMapModule, IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: 'app-fleet-management-grid',
  imports: [
    CommonModule,
    IgxPieChartModule,
    IgxCategoryChartModule,
    IgxGridComponent,
    IgxColumnComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarTitleComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarHidingComponent,
    IgxGridToolbarPinningComponent,
    IgxGridToolbarExporterComponent,
    IgxGridToolbarAdvancedFilteringComponent,
    IgxTabsComponent,
    IgxTabItemComponent,
    IgxTabHeaderComponent,
    IgxTabContentComponent,
    IgxGridDetailTemplateDirective,
    IgxCarouselComponent,
    IgxSlideComponent,
    IgxBadgeComponent,
    IgxCellTemplateDirective,
    IgxDividerDirective,
    IgxIconComponent,
    IgxButtonDirective,
    IgxButtonModule,
    IgxAvatarComponent,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardContentDirective,
    IgxGeographicMapModule,
    IgxDataChartInteractivityModule,
    IgxShapeDataSourceModule,
    IgxCardActionsComponent,
    IgxLegendDynamicModule,
    IgxSelectComponent,
    IgxSelectItemComponent,
    IgxLabelDirective
  ],
  templateUrl: './fleet-management-grid.component.html',
  styleUrl: './fleet-management-grid.component.scss'
})
export class FleetManagementGridComponent {

  //view childs
  @ViewChild('grid', { static: true }) public grid!: IgxGridComponent;
  @ViewChild(`locationOverlay`) private locationOverlay!: ElementRef;
  @ViewChild(`driverOverlay`) private driverOverlay!: ElementRef;
  @ViewChild("map", { static: true }) public map!: IgxGeographicMapComponent;

  //overlay IDs
  private locationOverlayId: string | null = null;
  private driverOverlayId: string | null = null;

  //overlay toggle flags
  public isLocationOverlayActive = false;
  public isDriverOverlayActive = false;

  //car details for location overlay
  public vehiclePhoto: string = '';
  public make: string = '';
  public model: string = '';
  public mileage: string = '';
  public markerLocations: any[] = [];

  //chart periods
  public initialPeriods = {
    costPerTypePeriod: "ytd",
    costPerMeterPeriod: "ytd",
    fuelCostPeriod: "ytd"
  }

  //driver details for detail overlay
  public driverDetails = {
    name: "",
    license: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    photo: ""
  }

  private bind: () => void;

  public fleetData = DATA;



  constructor(
    private iconService: IgxIconService,
    @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
    private viewContainerRef: ViewContainerRef) {

      this.bind = () => {
        this.fleetData.forEach(vehicle => {
          (vehicle.utilization as any).__dataIntents = {
            "'2023'": ["SeriesTitle/2023"],
            "'2024'": ["SeriesTitle/2024"]
          };
        })
      };
      this.bind();
    }

  public ngOnInit(): void {
    this.iconService.addSvgIconFromText(check.name, check.value, 'imx-icons');
    this.iconService.addSvgIconFromText(wrench.name, wrench.value, 'imx-icons');
    this.iconService.addSvgIconFromText(delivery.name, delivery.value, 'imx-icons');
    this.iconService.addSvgIconFromText(gitIssue.name, gitIssue.value, 'imx-icons');
  }

  public ngAfterViewInit(): void {
    this.grid.sortingExpressions = [
        {
            dir: SortingDirection.Asc, fieldName: 'vehicleId',
            ignoreCase: true, strategy: DefaultSortingStrategy.instance()
        }
    ];
  }

  public ngOnDestroy(): void {
    if (this.locationOverlayId) {
        this.overlayService.detach(this.locationOverlayId);
        this.locationOverlayId = null;
    }
    if (this.driverOverlayId) {
      this.overlayService.detach(this.driverOverlayId);
      this.driverOverlayId = null;
  }
  }

  //handling for chart periods
  public onPeriodChange(event: any, chart: string): void {
    if (chart == "costsPerType") {
      this.initialPeriods.costPerTypePeriod = event.newSelection.value;
    } else if (chart == "costsPerMeter") {
      this.initialPeriods.costPerMeterPeriod = event.newSelection.value;
    } else if (chart == "fuelCosts") {
      this.initialPeriods.fuelCostPeriod = event.newSelection.value;
    }

  }

  public getPeriodData(dataItem:any, chart: string) {
    if (chart == "costsPerType") {
      return dataItem[this.initialPeriods.costPerTypePeriod]
    } else if (chart == "costsPerMeter") {
      return dataItem[this.initialPeriods.costPerMeterPeriod]
    } else if (chart == "fuelCosts") {
      return dataItem[this.initialPeriods.fuelCostPeriod]
    }
  }

  //getters for image paths
  public getPathToLogoImage(value: string): string {
    return `/cars/logos/${value}.png`;
  }

  public getPathToCarImage(vehicleId: string): string[] {
    const carEntry = CAR_PHOTO_MANIFEST.find(car => car.id === vehicleId);

    if (!carEntry) {
      console.warn(`No vehicle found with ID: ${vehicleId}`);
      return [];
    }

    const folderName = carEntry.folder;

    const carPhotoNames = (CAR_IMAGES as Record<string, string[]>)[folderName];

    const carPathsToPhotos = carPhotoNames.map(photo => `/cars/photos/${folderName}/${photo}`);

    return carPathsToPhotos;
  }

  public getPathToDriverPhoto(cell: any) {
    return `/people/${cell.row.data.driver.photo}.jpg`;
  }

  //overlay logic
  public showLocationOverlay(event: MouseEvent, cell: any) {

    const vehicleId = cell.row?.cells?.find((c: any) => c.column.field === 'vehicleId')?.value;

    if (vehicleId === undefined) {
      console.error('Vehicle ID not found in data');
      return;
    }

    const vehicle = this.fleetData.find(v => v.vehicleId === vehicleId)

    if (!vehicle) {
      console.error(`No vehicle found for ID: ${vehicleId}`);
      return;
    }
    this.vehiclePhoto = this.getPathToCarImage(vehicleId)[0];
    this.make = vehicle.make;
    this.model = vehicle.model;
    this.mileage = vehicle.details.mileage;
    this.markerLocations = [
      { latitude: parseFloat(vehicle.locationGps.split(',')[0]), longitude: parseFloat(vehicle.locationGps.split(',')[1]) },
    ];

    this.map.series.clear();
    this.addSeriesWith(this.markerLocations, "Red");
    const centerPoint = {
      left: this.markerLocations[0].longitude - 0.005,
      top: this.markerLocations[0].latitude - 0.02,
      width: 0.01,
      height: 0.01
    };
    this.map.zoomToGeographic(centerPoint);

    const overlaySettings = IgxOverlayService.createRelativeOverlaySettings(
      event.target as HTMLElement,
      RelativePosition.Before,
      RelativePositionStrategy.Auto,
    );

    if (this.locationOverlayId) {
      this.overlayService.detach(this.locationOverlayId);
    }

    this.isLocationOverlayActive = true;
    this.locationOverlayId = this.overlayService.attach(this.locationOverlay, overlaySettings);
    this.overlayService.show(this.locationOverlayId);
  }

  public closeLocationOverlay() {
    this.isLocationOverlayActive = false;
    if (this.locationOverlayId) {
      this.overlayService.hide(this.locationOverlayId);
    }
  }

  public showDriverOverlay(event: MouseEvent, cell: any) {

    const driver = cell.row?.cells?.find((c: any) => c.column.field === 'driver')?.value;

    if (driver === undefined) {
      console.error('Driver not found in data');
      return;
    }

    this.driverDetails.name = driver.name;
    this.driverDetails.license = driver.license;
    this.driverDetails.address = driver.address;
    this.driverDetails.city = driver.city;
    this.driverDetails.phone = driver.phone;
    this.driverDetails.email = driver.email;
    this.driverDetails.photo = `/people/${driver.photo}.jpg`;

    const overlaySettings = IgxOverlayService.createRelativeOverlaySettings(
      event.target as HTMLElement,
      RelativePosition.After,
      RelativePositionStrategy.Auto,
    );

    if (this.driverOverlayId) {
      this.overlayService.detach(this.driverOverlayId);
    }

    this.isDriverOverlayActive = true;
    this.driverOverlayId = this.overlayService.attach(this.driverOverlay, overlaySettings);
    this.overlayService.show(this.driverOverlayId);
  }

  public closeDriverOverlay() {
    this.isDriverOverlayActive = false;
    if (this.driverOverlayId) {
      this.overlayService.hide(this.driverOverlayId);
    }
  }

  //util function for adding map series
  private addSeriesWith(locations:any[], brush: string) {
    const symbolSeries = new IgxGeographicSymbolSeriesComponent();
    symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Diamond;
        symbolSeries.latitudeMemberPath = "latitude";
        symbolSeries.longitudeMemberPath = "longitude";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        this.map.series.add(symbolSeries);
  }
}
