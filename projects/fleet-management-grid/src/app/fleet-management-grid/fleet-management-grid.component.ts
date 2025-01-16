import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { check, delivery, gitIssue, wrench } from '@igniteui/material-icons-extended';
import { AutoPositionStrategy, DefaultSortingStrategy, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxButtonModule, IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCarouselComponent, IgxCellTemplateDirective, IgxColumnComponent, IgxDividerDirective, IgxGridComponent, IgxGridDetailTemplateDirective, IgxGridToolbarActionsComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent, IgxIconComponent, IgxIconService, IgxLabelDirective, IgxOverlayService, IgxSelectComponent, IgxSelectItemComponent, IgxSlideComponent, IgxTabContentComponent, IgxTabHeaderComponent, IgxTabItemComponent, IgxTabsComponent, RelativePosition, RelativePositionStrategy, SortingDirection } from 'igniteui-angular';
import { IgxCategoryChartModule, IgxDataChartInteractivityModule, IgxLegendDynamicModule, IgxPieChartModule } from 'igniteui-angular-charts';
import CAR_PHOTO_MANIFEST from '../../assets/car_photo_manifest.json';
import CAR_IMAGES from '../../assets/car_images.json'
import { IgDataTemplate, IgxShapeDataSourceModule } from 'igniteui-angular-core';
import { IgxGeographicMapComponent, IgxGeographicMapModule, IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'igniteui-angular/animations';
import { DataService } from '../services/data.service';

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
  public periods = {
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

  constructor(
    private iconService: IgxIconService,
    @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
    public dataService: DataService) {}

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
      this.periods.costPerTypePeriod = event.newSelection.value;
    } else if (chart == "costsPerMeter") {
      this.periods.costPerMeterPeriod = event.newSelection.value;
    } else if (chart == "fuelCosts") {
      this.periods.fuelCostPeriod = event.newSelection.value;
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
    return `/people/${this.dataService.getDriverPhoto(cell.row.data.driverName)}.jpg`;
  }

  //overlay logic
  public showLocationOverlay(event: MouseEvent, cell: any) {

    const vehicleId = cell.row?.cells?.find((c: any) => c.column.field === 'vehicleId')?.value;

    if (vehicleId === undefined) {
      console.error('Vehicle ID not found in data');
      return;
    }

    const vehicle = this.dataService.getVehiclesData().find(v => v.vehicleId === vehicleId)

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
      left: this.markerLocations[0].longitude - 0.01,
      top: this.markerLocations[0].latitude - 0.01,
      width: 0.01,
      height: 0.01
    };
    this.map.zoomToGeographic(centerPoint);

    const overlaySettings = IgxOverlayService.createRelativeOverlaySettings(
      event.target as HTMLElement,
      RelativePosition.Before,
      RelativePositionStrategy.Auto,
    );

    (overlaySettings.positionStrategy as AutoPositionStrategy).settings.openAnimation = useAnimation(fadeIn, { params: { duration: '500ms', fromOpacity: 0, toOpacity: 1 } });
    (overlaySettings.positionStrategy as AutoPositionStrategy).settings.closeAnimation = useAnimation(fadeOut, { params: { duration: '500ms', fromOpacity: 1, toOpacity: 0 } });

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

    const driverName = cell.row?.cells?.find((c: any) => c.column.field === 'driverName')?.value;

    if (driverName === undefined) {
      console.error('Driver not found in data');
      return;
    }

    const driverDetails = this.dataService.getDriverData(driverName);

    this.driverDetails.name = driverDetails?.name as string;
    this.driverDetails.license = driverDetails?.license as string;
    this.driverDetails.address = driverDetails?.address as string;
    this.driverDetails.city = driverDetails?.city as string;
    this.driverDetails.phone = driverDetails?.phone as string;
    this.driverDetails.email = driverDetails?.email as string;
    this.driverDetails.photo = `/people/${driverDetails?.photo}.jpg`;

    const overlaySettings = IgxOverlayService.createRelativeOverlaySettings(
      event.target as HTMLElement,
      RelativePosition.After,
      RelativePositionStrategy.Auto,
    );

    (overlaySettings.positionStrategy as AutoPositionStrategy).settings.openAnimation = useAnimation(fadeIn, { params: { duration: '500ms', fromOpacity: 0, toOpacity: 1 } });
    (overlaySettings.positionStrategy as AutoPositionStrategy).settings.closeAnimation = useAnimation(fadeOut, { params: { duration: '500ms', fromOpacity: 1, toOpacity: 0 } });

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
        symbolSeries.latitudeMemberPath = "latitude";
        symbolSeries.longitudeMemberPath = "longitude";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.markerTemplate = {
          measure: (measureInfo) => {
            measureInfo.width = 24;
            measureInfo.height = 24;
          },
          render: (renderInfo) => {
            const ctx = renderInfo.context;
            const x = renderInfo.xPosition;
            const y = renderInfo.yPosition;

            const img = new Image();
            img.src = 'location_pin.svg';
            img.onload = () => {
              ctx.drawImage(img, x - 12, y - 12, 32, 32);
            };
          }
        } as IgDataTemplate;
        this.map.series.add(symbolSeries);
  }
}
