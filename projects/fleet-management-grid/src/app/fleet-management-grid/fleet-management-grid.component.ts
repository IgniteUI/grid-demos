import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation, computed, signal } from '@angular/core';
import { IgxBadgeComponent } from 'igniteui-angular/badge';
import { IgxCardComponent, IgxCardContentDirective } from 'igniteui-angular/card';
import { IgxChipComponent } from 'igniteui-angular/chips';
import {
  IgxCellTemplateDirective,
  IgxColumnComponent,
  IgxGridDetailTemplateDirective,
  IgxGridToolbarActionsComponent,
  IgxGridToolbarAdvancedFilteringComponent,
  IgxGridToolbarComponent,
  IgxGridToolbarHidingComponent,
  IgxGridToolbarPinningComponent,
  IgxGridToolbarTitleComponent
} from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';
import { IgxCategoryChartModule, IgxDoughnutChartModule, IgxRingSeriesModule } from 'igniteui-angular-charts';

type FleetStatus = 'Active' | 'Available' | 'In Maintenance';
type FleetStatusFilter = 'all' | FleetStatus;

interface FleetVehicleSpecs {
  engine: string;
  generation: string;
  year: number;
  fuelType: string;
  power: string;
  mileage: string;
  doorsSeats: string;
  cubature: string;
  color: string;
  transmission: string;
  msrp: string;
  tollPassId: string;
}

interface FleetVehicle {
  id: string;
  licensePlate: string;
  make: string;
  model: string;
  type: string;
  vin: string;
  status: FleetStatus;
  locationCity: string;
  locationGps: string;
  specs: FleetVehicleSpecs;
}

interface FleetTripRow {
  date: string;
  from: string;
  to: string;
  startMeter: string;
  endMeter: string;
  distance: string;
  duration: string;
  driver: string;
}

interface FleetMaintenanceRow {
  date: string;
  service: string;
  odometer: string;
  cost: string;
  status: 'Completed' | 'Scheduled';
}

interface FleetCostItem {
  label: string;
  value: number;
  tone: 'fuel' | 'maintenance' | 'insurance' | 'tolls';
}

interface FleetCostDistributionPoint {
  label: string;
  displayLabel: string;
  percentage: string;
  value: number;
  tone: FleetCostItem['tone'];
}

interface FleetMonthlySpendPoint { month: string; spend: number; }
interface FleetUtilizationComparisonPoint { month: string; utilization2024: number; utilization2025: number; }
type FleetCarImageCatalog = Record<string, readonly string[]>;
interface FleetCarImageMatch { key: string; files: readonly string[]; score: number; }

@Component({
  selector: 'app-fleet-management-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    IgxIconComponent,
    IgxChipComponent,
    IgxGridComponent,
    IgxColumnComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarTitleComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarHidingComponent,
    IgxGridToolbarPinningComponent,
    IgxGridToolbarAdvancedFilteringComponent,
    IgxGridDetailTemplateDirective,
    IgxCellTemplateDirective,
    IgxBadgeComponent,
    IgxTabsComponent,
    IgxTabItemComponent,
    IgxTabHeaderComponent,
    IgxTabContentComponent,
    IgxCardComponent,
    IgxCardContentDirective,
    IgxDoughnutChartModule,
    IgxRingSeriesModule,
    IgxCategoryChartModule
  ],
  templateUrl: './fleet-management-grid.component.html',
  styleUrl: './fleet-management-grid.component.scss'
})
export class FleetManagementGridComponent implements OnInit {
  protected readonly vm = this;
  protected readonly isBrowser: boolean;

  private readonly fleetVehiclePhotoBaseUrl = 'https://www.infragistics.com/angular-grid-examples/cars/photos/';
  private readonly fleetVehicleFallbackPhotoUrl = 'https://www.infragistics.com/angular-grid-examples/cars/photos/Ford%20Focus%20blue/ford-focus-5167838_1280.jpg';
  private readonly fleetVehicleImageCatalog = signal<FleetCarImageCatalog>({});

  protected readonly fleetUtilizationComparisonBrushes = ['#ef3f81', '#48bc5e'];
  protected readonly fleetCostChartBrushes = ['#4c8be7', '#ef3f81', '#48bc5e', '#e2b04f'];
  protected readonly fleetChartLabelColor = '#aeb7c8';
  protected readonly fleetChartGridlineColor = 'rgba(255, 255, 255, 0.18)';

  protected readonly fleetVehicles: FleetVehicle[] = [
    { id: 'A00101', licensePlate: 'KVG 8850', make: 'Ford', model: 'Focus', type: 'Hatchback', vin: '1FADP3F24HL312717', status: 'Active', locationCity: 'New York, NY', locationGps: '40.743828, -74.037982', specs: { engine: '1.5 TSI', generation: 'Focus Mk4', year: 2020, fuelType: 'Gasoline', power: '150 Hp', mileage: '28,140 mi', doorsSeats: '5 / 5', cubature: '1498 cm3', color: 'Blue', transmission: 'Automatic', msrp: '$24,700', tollPassId: 'EZ-193482' } },
    { id: 'A00102', licensePlate: '5VLZ 91', make: 'Ford', model: 'Focus', type: 'Hatchback', vin: 'WF0KXXGCKCY565571', status: 'Active', locationCity: 'Boston, MA', locationGps: '42.352104, -71.075238', specs: { engine: '1.0 EcoBoost', generation: 'Focus Mk3', year: 2019, fuelType: 'Gasoline', power: '125 Hp', mileage: '32,905 mi', doorsSeats: '5 / 5', cubature: '999 cm3', color: 'Silver', transmission: 'Manual', msrp: '$20,900', tollPassId: 'EZ-402112' } },
    { id: 'A00103', licensePlate: 'C10 EFF', make: 'VW', model: 'Passat', type: 'Station Wagon', vin: '1VWZYZ33DER623111', status: 'Available', locationCity: 'Camden, NJ', locationGps: '39.926602, -75.105908', specs: { engine: '1.6 GDI', generation: 'Passat B8', year: 2021, fuelType: 'Gasoline', power: '128 Hp', mileage: '18,200 mi', doorsSeats: '4 / 5', cubature: '1591 cm3', color: 'White', transmission: 'Automatic', msrp: '$21,900', tollPassId: 'EZ-000000' } },
    { id: 'A00104', licensePlate: 'KUM 0269', make: 'VW', model: 'Passat', type: 'Station Wagon', vin: '1VWZYZ33ZWE623426', status: 'Active', locationCity: 'Philadelphia, PA', locationGps: '39.992220, -75.141041', specs: { engine: '2.0 TDI', generation: 'Passat B8', year: 2019, fuelType: 'Diesel', power: '150 Hp', mileage: '35,900 mi', doorsSeats: '4 / 5', cubature: '1968 cm3', color: 'Black', transmission: 'Automatic', msrp: '$23,500', tollPassId: 'EZ-733492' } },
    { id: 'A00105', licensePlate: 'NJ XR2188', make: 'VW', model: 'Golf', type: 'Hatchback', vin: 'WVWZZZAUZLW042105', status: 'Active', locationCity: 'Newark, NJ', locationGps: '40.735657, -74.172363', specs: { engine: '1.5 TSI', generation: 'Golf Mk8', year: 2022, fuelType: 'Gasoline', power: '148 Hp', mileage: '16,720 mi', doorsSeats: '5 / 5', cubature: '1498 cm3', color: 'Blue', transmission: 'Automatic', msrp: '$26,400', tollPassId: 'EZ-220511' } },
    { id: 'A00106', licensePlate: 'PA QN4731', make: 'VW', model: 'Polo', type: 'Hatchback', vin: 'WVWZZZAWZMU018406', status: 'Available', locationCity: 'Allentown, PA', locationGps: '40.608430, -75.490183', specs: { engine: '1.0 TSI', generation: 'Polo AW', year: 2021, fuelType: 'Gasoline', power: '95 Hp', mileage: '22,410 mi', doorsSeats: '5 / 5', cubature: '999 cm3', color: 'Blue', transmission: 'Manual', msrp: '$19,800', tollPassId: 'EZ-194774' } },
    { id: 'A00107', licensePlate: 'CT LB9912', make: 'Mazda', model: '3', type: 'Sedan', vin: 'JM1BPAML1N1527107', status: 'Active', locationCity: 'Hartford, CT', locationGps: '41.765274, -72.678776', specs: { engine: '2.5 Skyactiv-G', generation: 'BP', year: 2022, fuelType: 'Gasoline', power: '186 Hp', mileage: '14,980 mi', doorsSeats: '4 / 5', cubature: '2488 cm3', color: 'Graphite', transmission: 'Automatic', msrp: '$25,650', tollPassId: 'EZ-871306' } },
    { id: 'A00108', licensePlate: 'NY UJ6409', make: 'Mazda', model: '6', type: 'Sedan', vin: 'JM1GL1VM9L1524108', status: 'Available', locationCity: 'Buffalo, NY', locationGps: '42.885440, -78.878372', specs: { engine: '2.5 Skyactiv-G', generation: 'GL', year: 2020, fuelType: 'Gasoline', power: '187 Hp', mileage: '31,260 mi', doorsSeats: '4 / 5', cubature: '2488 cm3', color: 'Gray', transmission: 'Automatic', msrp: '$27,300', tollPassId: 'EZ-774650' } },
    { id: 'A00109', licensePlate: 'MA BK7315', make: 'Kia', model: 'Soul', type: 'Compact SUV', vin: 'KNDJ23AU7N7189109', status: 'Active', locationCity: 'Lowell, MA', locationGps: '42.633425, -71.316170', specs: { engine: '2.0 MPI', generation: 'SK3', year: 2022, fuelType: 'Gasoline', power: '147 Hp', mileage: '13,940 mi', doorsSeats: '5 / 5', cubature: '1999 cm3', color: 'Red', transmission: 'CVT', msrp: '$23,100', tollPassId: 'EZ-539102' } },
    { id: 'A00110', licensePlate: 'RI FV8820', make: 'Hyundai', model: 'Kona', type: 'SUV', vin: 'KM8K53A36NU891110', status: 'In Maintenance', locationCity: 'Warwick, RI', locationGps: '41.700101, -71.416168', specs: { engine: '2.0 MPI', generation: 'OS', year: 2021, fuelType: 'Gasoline', power: '147 Hp', mileage: '27,130 mi', doorsSeats: '5 / 5', cubature: '1999 cm3', color: 'Gray', transmission: 'Automatic', msrp: '$24,450', tollPassId: 'EZ-608992' } },
    { id: 'A00111', licensePlate: 'CT YE5513', make: 'Hyundai', model: 'ix35', type: 'SUV', vin: 'TMAJU81U8DJ271111', status: 'Available', locationCity: 'New Haven, CT', locationGps: '41.308273, -72.927879', specs: { engine: '2.0 CRDi', generation: 'LM', year: 2018, fuelType: 'Diesel', power: '136 Hp', mileage: '41,380 mi', doorsSeats: '5 / 5', cubature: '1995 cm3', color: 'Silver', transmission: 'Automatic', msrp: '$22,700', tollPassId: 'EZ-331750' } },
    { id: 'A00112', licensePlate: 'NY PK2044', make: 'Honda', model: 'Civic', type: 'Sedan', vin: '2HGFE2F54NH341112', status: 'Active', locationCity: 'Albany, NY', locationGps: '42.652580, -73.756233', specs: { engine: '2.0 i-VTEC', generation: 'FE', year: 2022, fuelType: 'Gasoline', power: '158 Hp', mileage: '18,860 mi', doorsSeats: '4 / 5', cubature: '1996 cm3', color: 'White', transmission: 'CVT', msrp: '$24,280', tollPassId: 'EZ-284512' } },
    { id: 'A00113', licensePlate: 'NJ TW6921', make: 'Toyota', model: 'Corolla', type: 'Sedan', vin: 'JTDB4MEE7NJ121113', status: 'Available', locationCity: 'Jersey City, NJ', locationGps: '40.717754, -74.043143', specs: { engine: '2.0 Dynamic Force', generation: 'E210', year: 2022, fuelType: 'Gasoline', power: '169 Hp', mileage: '15,540 mi', doorsSeats: '4 / 5', cubature: '1987 cm3', color: 'White', transmission: 'CVT', msrp: '$23,950', tollPassId: 'EZ-746104' } },
    { id: 'A00114', licensePlate: 'NY PU6172', make: 'Kia', model: 'Sportage', type: 'SUV', vin: 'KNDPU3AF2P7014114', status: 'Available', locationCity: 'Yonkers, NY', locationGps: '40.931210, -73.898747', specs: { engine: '2.5 GDI', generation: 'Sportage NQ5', year: 2023, fuelType: 'Gasoline', power: '187 Hp', mileage: '9,420 mi', doorsSeats: '5 / 5', cubature: '2497 cm3', color: 'Sapphire Blue', transmission: 'Automatic', msrp: '$29,300', tollPassId: 'EZ-163590' } },
    { id: 'A00115', licensePlate: 'PA HG3370', make: 'Toyota', model: 'RAV4', type: 'SUV', vin: '2T3P1RFV3NW181115', status: 'Active', locationCity: 'Reading, PA', locationGps: '40.335648, -75.926872', specs: { engine: '2.5 Dynamic Force', generation: 'RAV4 XA50', year: 2022, fuelType: 'Gasoline', power: '203 Hp', mileage: '17,940 mi', doorsSeats: '5 / 5', cubature: '2487 cm3', color: 'White', transmission: 'Automatic', msrp: '$32,400', tollPassId: 'EZ-921143' } },
    { id: 'A00116', licensePlate: 'MA CF7201', make: 'Toyota', model: 'RAV4', type: 'SUV', vin: '2T3P1RFV1NW181116', status: 'In Maintenance', locationCity: 'Cambridge, MA', locationGps: '42.366978, -71.105615', specs: { engine: '2.5 Dynamic Force', generation: 'RAV4 XA50', year: 2021, fuelType: 'Gasoline', power: '203 Hp', mileage: '29,540 mi', doorsSeats: '5 / 5', cubature: '2487 cm3', color: 'Lunar Rock', transmission: 'Automatic', msrp: '$31,850', tollPassId: 'EZ-903374' } },
    { id: 'A00117', licensePlate: 'NJ JM4258', make: 'Tesla', model: '3', type: 'Sedan', vin: '5YJ3E1EA4NF391117', status: 'Active', locationCity: 'Hoboken, NJ', locationGps: '40.743991, -74.032364', specs: { engine: 'Dual Motor EV', generation: 'Model 3 Highland', year: 2024, fuelType: 'Electric', power: '283 kW', mileage: '8,120 mi', doorsSeats: '4 / 5', cubature: 'N/A', color: 'White', transmission: 'Single-speed', msrp: '$39,990', tollPassId: 'EZ-112709' } },
    { id: 'A00118', licensePlate: 'RI DS4307', make: 'VW', model: 'Touareg', type: 'SUV', vin: '3VV2B7AX4NM091118', status: 'Available', locationCity: 'Providence, RI', locationGps: '41.824577, -71.412118', specs: { engine: '3.0 V6', generation: 'Touareg CR', year: 2022, fuelType: 'Gasoline', power: '340 Hp', mileage: '14,250 mi', doorsSeats: '5 / 7', cubature: '2995 cm3', color: 'Atlantic Blue', transmission: 'Automatic', msrp: '$30,900', tollPassId: 'EZ-640125' } },
    { id: 'A00119', licensePlate: 'CT DR1542', make: 'VW', model: 'Touareg', type: 'SUV', vin: 'WVGZZZCRZND091119', status: 'Active', locationCity: 'Bridgeport, CT', locationGps: '41.179226, -73.189438', specs: { engine: '3.0 V6 TDI', generation: 'Touareg CR', year: 2021, fuelType: 'Diesel', power: '286 Hp', mileage: '23,500 mi', doorsSeats: '5 / 7', cubature: '2967 cm3', color: 'Black', transmission: 'Automatic', msrp: '$47,900', tollPassId: 'EZ-518620' } },
    { id: 'A00120', licensePlate: 'PA MX2803', make: 'Ford', model: 'Focus', type: 'Hatchback', vin: 'WF0NXXGCHNML29120', status: 'Available', locationCity: 'Scranton, PA', locationGps: '41.408969, -75.662412', specs: { engine: '1.5 EcoBoost', generation: 'Focus Mk4', year: 2021, fuelType: 'Gasoline', power: '150 Hp', mileage: '20,640 mi', doorsSeats: '5 / 5', cubature: '1498 cm3', color: 'Dark Gray', transmission: 'Automatic', msrp: '$24,900', tollPassId: 'EZ-457201' } },
    { id: 'A00121', licensePlate: 'MA QL7740', make: 'Kia', model: 'EV6', type: 'Crossover', vin: 'KNDC34LA3N5121121', status: 'Active', locationCity: 'Springfield, MA', locationGps: '42.101483, -72.589811', specs: { engine: 'RWD EV', generation: 'EV6', year: 2023, fuelType: 'Electric', power: '168 kW', mileage: '11,390 mi', doorsSeats: '5 / 5', cubature: 'N/A', color: 'Gray', transmission: 'Single-speed', msrp: '$42,600', tollPassId: 'EZ-690144' } },
    { id: 'A00122', licensePlate: 'NY BP3006', make: 'Ford', model: 'Mustang', type: 'Coupe', vin: '1FA6P8TH1N5101122', status: 'In Maintenance', locationCity: 'Rochester, NY', locationGps: '43.156578, -77.608849', specs: { engine: '2.3 EcoBoost', generation: 'S650', year: 2024, fuelType: 'Gasoline', power: '315 Hp', mileage: '6,950 mi', doorsSeats: '2 / 4', cubature: '2261 cm3', color: 'Red', transmission: 'Automatic', msrp: '$41,200', tollPassId: 'EZ-305609' } },
    { id: 'A00123', licensePlate: 'MA GX6243', make: 'VW', model: 'Caddy', type: 'Van', vin: 'NM0LS7E21N1561123', status: 'Active', locationCity: 'Worcester, MA', locationGps: '42.262593, -71.802293', specs: { engine: '2.0 TDI', generation: 'Caddy V', year: 2022, fuelType: 'Diesel', power: '122 Hp', mileage: '19,770 mi', doorsSeats: '4 / 2', cubature: '1968 cm3', color: 'Frozen White', transmission: 'Automatic', msrp: '$31,250', tollPassId: 'EZ-150763' } }
    ,{ id: 'A00124', licensePlate: 'RI NT4184', make: 'VW', model: 'Caddy', type: 'Van', vin: 'WV1ZZZ2KZPX081124', status: 'Available', locationCity: 'Pawtucket, RI', locationGps: '41.878711, -71.382555', specs: { engine: '2.0 TDI', generation: 'Caddy V', year: 2023, fuelType: 'Diesel', power: '122 Hp', mileage: '10,260 mi', doorsSeats: '4 / 2', cubature: '1968 cm3', color: 'White', transmission: 'Automatic', msrp: '$32,300', tollPassId: 'EZ-722430' } },
    { id: 'A00125', licensePlate: 'CT XM6102', make: 'Toyota', model: 'Tundra', type: 'Pickup', vin: '5TFMA5DB4NX011125', status: 'Active', locationCity: 'Stamford, CT', locationGps: '41.053430, -73.538734', specs: { engine: '3.5 Twin-Turbo V6', generation: 'XK70', year: 2022, fuelType: 'Gasoline', power: '389 Hp', mileage: '24,880 mi', doorsSeats: '4 / 5', cubature: '3445 cm3', color: 'White', transmission: 'Automatic', msrp: '$49,500', tollPassId: 'EZ-248901' } },
    { id: 'A00126', licensePlate: 'PA CP7618', make: 'Ford', model: 'F-150', type: 'Pickup', vin: '1FTFW1E83NFA11226', status: 'Available', locationCity: 'Erie, PA', locationGps: '42.129224, -80.085060', specs: { engine: '3.5 EcoBoost', generation: 'P702', year: 2023, fuelType: 'Gasoline', power: '400 Hp', mileage: '13,500 mi', doorsSeats: '4 / 5', cubature: '3496 cm3', color: 'Blue', transmission: 'Automatic', msrp: '$52,900', tollPassId: 'EZ-640318' } }
  ];

  protected readonly fleetStatusFilter = signal<FleetStatusFilter>('all');
  protected readonly fleetSearchQuery = signal('');

  protected readonly filteredFleetVehicles = computed(() => {
    const query = this.fleetSearchQuery().trim().toLowerCase();
    const status = this.fleetStatusFilter();
    return this.fleetVehicles.filter((vehicle) => {
      if (status !== 'all' && vehicle.status !== status) return false;
      if (!query) return true;
      const searchTarget = [vehicle.id, vehicle.licensePlate, vehicle.vin, vehicle.make, vehicle.model, vehicle.locationCity].join(' ').toLowerCase();
      return searchTarget.includes(query);
    });
  });

  protected readonly fleetMetrics = computed(() => {
    const active = this.fleetVehicles.filter((v) => v.status === 'Active').length;
    const available = this.fleetVehicles.filter((v) => v.status === 'Available').length;
    const maintenance = this.fleetVehicles.filter((v) => v.status === 'In Maintenance').length;
    return [
      { label: 'All vehicles', value: this.fleetVehicles.length },
      { label: 'Active', value: active },
      { label: 'Available', value: available },
      { label: 'In Maintenance', value: maintenance }
    ];
  });

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      void this.loadFleetVehicleImageCatalog();
    }
  }

  protected fleetStatusClass(status: FleetStatus): string {
    if (status === 'Active') return 'status-active';
    if (status === 'Available') return 'status-available';
    return 'status-maintenance';
  }

  protected isFleetFilterActive(filter: FleetStatusFilter): boolean {
    return this.fleetStatusFilter() === filter;
  }

  protected setFleetFilter(filter: FleetStatusFilter): void {
    this.fleetStatusFilter.set(filter);
  }

  protected fleetTripSummary(vehicle: FleetVehicle): { trips: number; totalDistance: string; avgTrip: string } {
    const seed = this.fleetSeed(vehicle);
    const trips = 18 + (seed % 8);
    const totalMiles = 248 + (seed % 9) * 16;
    return { trips, totalDistance: `${this.formatWholeNumber(totalMiles)} mi`, avgTrip: `${(totalMiles / trips).toFixed(1)} mi` };
  }

  protected fleetTripHistory(vehicle: FleetVehicle): FleetTripRow[] {
    const seed = this.fleetSeed(vehicle);
    const city = this.fleetCity(vehicle);
    const baseDistance = 8.4 + (seed % 5) * 1.3;
    const currentMileage = this.fleetMileageValue(vehicle);
    const tripDistances = [baseDistance + 4.5, baseDistance + 0.1, baseDistance + 8.8, baseDistance + 8.1, baseDistance + 5.2, baseDistance + 6.6].map((v) => Number(v.toFixed(1)));

    let runningMeter = currentMileage + tripDistances.reduce((sum, value) => sum + value, 0);
    const buildMeters = (distance: number): { startMeter: string; endMeter: string } => {
      const endMeterValue = runningMeter;
      const startMeterValue = Math.max(0, endMeterValue - distance);
      runningMeter = startMeterValue;
      return { startMeter: `${this.formatOneDecimal(startMeterValue)} mi`, endMeter: `${this.formatOneDecimal(endMeterValue)} mi` };
    };

    return [
      { date: 'Jul 22', from: `Depot - ${city}`, to: `Client Site - ${city}`, ...buildMeters(tripDistances[0]), distance: `${tripDistances[0].toFixed(1)} mi`, duration: `${24 + (seed % 9)} min`, driver: this.fleetDriverName(vehicle, 0) },
      { date: 'Jul 21', from: `Client Site - ${city}`, to: `Depot - ${city}`, ...buildMeters(tripDistances[1]), distance: `${tripDistances[1].toFixed(1)} mi`, duration: `${19 + (seed % 6)} min`, driver: this.fleetDriverName(vehicle, 0) },
      { date: 'Jul 19', from: `Depot - ${city}`, to: `Warehouse - ${city}`, ...buildMeters(tripDistances[2]), distance: `${tripDistances[2].toFixed(1)} mi`, duration: `${32 + (seed % 10)} min`, driver: this.fleetDriverName(vehicle, 1) },
      { date: 'Jul 17', from: `Warehouse - ${city}`, to: `Depot - ${city}`, ...buildMeters(tripDistances[3]), distance: `${tripDistances[3].toFixed(1)} mi`, duration: `${30 + (seed % 9)} min`, driver: this.fleetDriverName(vehicle, 1) },
      { date: 'Jul 15', from: `Depot - ${city}`, to: `Regional Office - ${city}`, ...buildMeters(tripDistances[4]), distance: `${tripDistances[4].toFixed(1)} mi`, duration: `${26 + (seed % 8)} min`, driver: this.fleetDriverName(vehicle, 2) },
      { date: 'Jul 13', from: `Regional Office - ${city}`, to: `Service Hub - ${city}`, ...buildMeters(tripDistances[5]), distance: `${tripDistances[5].toFixed(1)} mi`, duration: `${28 + (seed % 7)} min`, driver: this.fleetDriverName(vehicle, 3) }
    ];
  }

  protected fleetMaintenanceNotice(vehicle: FleetVehicle): string {
    const seed = this.fleetSeed(vehicle);
    const services = ['Tire rotation & balance', 'Brake fluid inspection', 'Air filter replacement', 'Multi-point inspection'];
    const service = services[seed % services.length];
    const dueMileage = this.nextServiceMileage(vehicle);
    return `Next service due: ${service} · est. ${this.formatWholeNumber(dueMileage)} mi`;
  }

  protected fleetMaintenanceRows(vehicle: FleetVehicle): FleetMaintenanceRow[] {
    const mileage = this.fleetMileageValue(vehicle);
    const dueMileage = this.nextServiceMileage(vehicle);
    return [
      { date: 'Jun 28, 2026', service: 'Oil & filter change', odometer: `${this.formatWholeNumber(Math.max(0, mileage - 2700))} mi`, cost: '$85', status: 'Completed' },
      { date: 'Mar 14, 2026', service: 'Brake pad replacement (front)', odometer: `${this.formatWholeNumber(Math.max(0, mileage - 6050))} mi`, cost: '$340', status: 'Completed' },
      { date: 'Dec 02, 2025', service: 'Annual inspection', odometer: `${this.formatWholeNumber(Math.max(0, mileage - 11500))} mi`, cost: '$120', status: 'Completed' },
      { date: 'Aug 30, 2026', service: this.fleetMaintenanceNotice(vehicle).split(': ')[1].split(' · ')[0], odometer: `est. ${this.formatWholeNumber(dueMileage)} mi`, cost: '—', status: 'Scheduled' }
    ];
  }

  protected fleetMaintenanceStatusClass(status: FleetMaintenanceRow['status']): string {
    return status === 'Completed' ? 'fleet-detail-pill-success' : 'fleet-detail-pill-warn';
  }

  protected fleetCostDistribution(vehicle: FleetVehicle): FleetCostDistributionPoint[] {
    const items = this.fleetCostItems(vehicle);
    const total = items.reduce((sum, item) => sum + item.value, 0);
    return items.map((item) => ({
      label: item.label,
      displayLabel: `${Math.round((item.value / total) * 100)}%`,
      percentage: `${Math.round((item.value / total) * 100)}%`,
      value: item.value,
      tone: item.tone
    }));
  }

  protected fleetMonthlyOperatingSpend(vehicle: FleetVehicle): FleetMonthlySpendPoint[] {
    const seed = this.fleetSeed(vehicle);
    const seasonalBase = [118, 148, 208, 238, 218, 258, 278, 208, 188, 228, 208, 178];
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
      const variability = ((seed + index * 7) % 5) * 10;
      const maintenanceAdjustment = vehicle.status === 'In Maintenance' && (index === 6 || index === 7) ? 22 : 0;
      const utilizationAdjustment = vehicle.status === 'Available' && index >= 8 ? -12 : 0;
      return { month, spend: seasonalBase[index] + variability + maintenanceAdjustment + utilizationAdjustment };
    });
  }

  protected fleetCostToneClass(tone: FleetCostItem['tone']): string {
    return `fleet-cost-tone-${tone}`;
  }

  protected fleetUtilizationSummary(vehicle: FleetVehicle): { rate: string; activeHours: string; idleHours: string; trips: number } {
    const seed = this.fleetSeed(vehicle);
    const rateValue = Math.max(52, 76 - (vehicle.status === 'In Maintenance' ? 9 : 0) - (vehicle.status === 'Available' ? 4 : 0) + (seed % 5));
    const activeHours = 92 + (seed % 16) * 2;
    const idleHours = Math.max(18, 44 - (seed % 7) * 2 + (vehicle.status === 'Available' ? 8 : 0));
    return { rate: `${rateValue}%`, activeHours: `${activeHours}h`, idleHours: `${idleHours}h`, trips: 18 + (seed % 8) };
  }

  protected fleetUtilizationSeries(vehicle: FleetVehicle): FleetUtilizationComparisonPoint[] {
    const seed = this.fleetSeed(vehicle);
    const base2024 = 160 + (seed % 5) * 14;
    const uplift2025 = 18 + (seed % 4) * 9;

    return [
      { month: 'Jan', utilization2024: base2024, utilization2025: base2024 + 42 },
      { month: 'Feb', utilization2024: base2024 + 22, utilization2025: base2024 + 4 },
      { month: 'Mar', utilization2024: base2024 + 140, utilization2025: base2024 + 118 },
      { month: 'Apr', utilization2024: base2024 + 316, utilization2025: base2024 + 278 },
      { month: 'May', utilization2024: base2024 + 418, utilization2025: base2024 + 472 },
      { month: 'Jun', utilization2024: base2024 + 502, utilization2025: base2024 + 564 },
      { month: 'Jul', utilization2024: base2024 + 560, utilization2025: base2024 + 586 + (vehicle.status === 'In Maintenance' ? -24 : uplift2025) },
      { month: 'Aug', utilization2024: base2024 + 594, utilization2025: base2024 + 650 + (vehicle.status === 'Available' ? -22 : uplift2025) },
      { month: 'Sep', utilization2024: base2024 + 506, utilization2025: base2024 + 480 + (vehicle.status === 'Available' ? -38 : 0) },
      { month: 'Oct', utilization2024: base2024 + 442, utilization2025: base2024 + 646 },
      { month: 'Nov', utilization2024: base2024 + 154, utilization2025: base2024 + 354 },
      { month: 'Dec', utilization2024: base2024 + 52, utilization2025: base2024 + 198 }
    ];
  }

  protected fleetVehiclePhotoUrl(vehicle: FleetVehicle): string {
    const photoUrls = this.fleetVehiclePhotoCandidates(vehicle);
    return photoUrls[0] ?? this.fleetVehicleFallbackPhotoUrl;
  }

  protected onFleetVehicleImageError(event: Event, vehicle: FleetVehicle): void {
    const target = event.target;
    if (!(target instanceof HTMLImageElement)) return;

    const photoUrls = this.fleetVehiclePhotoCandidates(vehicle);
    const currentOffset = Number(target.dataset['fallbackIndex'] ?? '0');
    const nextOffset = currentOffset + 1;

    if (nextOffset >= photoUrls.length) return;
    target.dataset['fallbackIndex'] = String(nextOffset);
    target.src = photoUrls[nextOffset];
  }

  private async loadFleetVehicleImageCatalog(): Promise<void> {
    try {
      const response = await fetch('/assets/car_images.json');
      if (!response.ok) return;
      const payload: unknown = await response.json();
      if (!payload || typeof payload !== 'object') return;

      const catalog: FleetCarImageCatalog = {};
      for (const [key, files] of Object.entries(payload as Record<string, unknown>)) {
        if (!Array.isArray(files)) continue;
        const validFiles = files.filter((item): item is string => typeof item === 'string' && item.trim().length > 0);
        if (validFiles.length > 0) catalog[key] = validFiles;
      }

      this.fleetVehicleImageCatalog.set(catalog);
    } catch {
      // Use fallback image when asset load fails.
    }
  }

  private fleetVehiclePhotoCandidates(vehicle: FleetVehicle): string[] {
    const catalog = this.fleetVehicleImageCatalog();
    const matches = this.fleetVehicleImageMatches(vehicle, catalog);
    if (matches.length === 0) return [this.fleetVehicleFallbackPhotoUrl];

    return matches
      .flatMap((match) => match.files.map((fileName) => `${this.fleetVehiclePhotoFolderUrl(match.key)}/${encodeURIComponent(fileName)}`))
      .filter((url, index, urls) => urls.indexOf(url) === index);
  }

  private fleetVehicleImageMatches(vehicle: FleetVehicle, catalog: FleetCarImageCatalog): FleetCarImageMatch[] {
    const makeTokens = this.fleetVehicleMakeTokens(vehicle.make);
    const modelToken = this.normalizePhotoToken(vehicle.model);
    const colorTokens = this.fleetVehicleColorTokens(vehicle.specs.color);

    return Object.entries(catalog)
      .map(([key, files]) => {
        const keyToken = this.normalizePhotoToken(key);
        let score = 0;
        if (!makeTokens.some((token) => keyToken.includes(token))) return null;

        score += 6;
        if (keyToken.includes(modelToken)) score += 10;
        if (keyToken.startsWith(`${makeTokens[0]} ${modelToken}`)) score += 5;
        for (const token of colorTokens) {
          if (token.length > 0 && keyToken.includes(token)) score += 3;
        }

        return { key, files, score };
      })
      .filter((match): match is FleetCarImageMatch => !!match && match.score > 0)
      .sort((left, right) => right.score - left.score);
  }

  private fleetVehiclePhotoFolderUrl(folderName: string): string {
    return `${this.fleetVehiclePhotoBaseUrl}${encodeURIComponent(folderName)}`;
  }

  private fleetVehicleMakeTokens(make: string): string[] {
    const normalized = this.normalizePhotoToken(make);
    if (normalized === 'vw' || normalized === 'volkswagen') return ['vw', 'volkswagen'];
    return [normalized];
  }

  private fleetVehicleColorTokens(color: string): string[] {
    const normalized = this.normalizePhotoToken(color);
    const tokens = normalized.split(' ').filter((token) => token.length > 0);
    if (normalized.length > 0) return [normalized, ...tokens];
    return tokens;
  }

  private normalizePhotoToken(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }

  private fleetCostItems(vehicle: FleetVehicle): FleetCostItem[] {
    const seed = this.fleetSeed(vehicle);
    const maintenanceBase = vehicle.status === 'In Maintenance' ? 520 : 280;

    return [
      { label: 'Fuel / charging', value: 360 + (seed % 5) * 26, tone: 'fuel' },
      { label: 'Maintenance', value: maintenanceBase + (seed % 4) * 25, tone: 'maintenance' },
      { label: 'Insurance', value: 180 + (seed % 3) * 30, tone: 'insurance' },
      { label: 'Tolls & fees', value: 54 + (seed % 6) * 7, tone: 'tolls' }
    ];
  }

  private fleetSeed(vehicle: FleetVehicle): number {
    return Number(vehicle.id.replace(/\D/g, '')) || 1;
  }

  private fleetCity(vehicle: FleetVehicle): string {
    return vehicle.locationCity.split(',')[0];
  }

  private fleetMileageValue(vehicle: FleetVehicle): number {
    return Number(vehicle.specs.mileage.replace(/[^\d]/g, '')) || 0;
  }

  private nextServiceMileage(vehicle: FleetVehicle): number {
    const mileage = this.fleetMileageValue(vehicle);
    return Math.ceil((mileage + 3200) / 5000) * 5000;
  }

  private fleetDriverName(vehicle: FleetVehicle, offset: number): string {
    const drivers = ['M. Alvarez', 'R. Chen', 'S. Patel', 'J. Walker', 'A. Brooks', 'T. Nguyen'];
    return drivers[(this.fleetSeed(vehicle) + offset) % drivers.length];
  }

  private formatWholeNumber(value: number): string {
    return Math.round(value).toLocaleString('en-US');
  }

  private formatOneDecimal(value: number): string {
    return value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  }
}

