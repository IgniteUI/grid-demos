import { Injectable } from '@angular/core';
import VEHICLES_DATA from '../../assets/data/vehicles.json';
import DRIVERS_DATA from '../../assets/data/drivers.json';
import TRIP_HISTORY_DATA from '../../assets/data/trip_history.json';
import MAINTENANCE_DATA from '../../assets/data/maintenance.json';
import COST_DATA from '../../assets/data/cost.json';
import UTILIZATION_DATA from '../../assets/data/utilization.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private vehiclesData = VEHICLES_DATA;
  private driversData = DRIVERS_DATA;
  private tripHistoryData = TRIP_HISTORY_DATA;
  private maintenanceData = MAINTENANCE_DATA;
  private costData = COST_DATA;
  private utilizationData = UTILIZATION_DATA;

  private bind: () => void;

  private fuelCostsCache: { [key: string]: any[] } = {};

  constructor() {
    this.bind = () => {
      this.utilizationData.forEach(vehicle => {
        (vehicle.utilization as any).__dataIntents = {
          "'2023'": ["SeriesTitle/2023"],
          "'2024'": ["SeriesTitle/2024"]
        };
      })
    };
    this.bind();
  }

  public getVehiclesData() {
    return this.vehiclesData;
  }

  public getDriverData(driverName: string) {
    return this.driversData.find(data => data.name == driverName);
  }

  public getDriverPhoto(driverName: string) {
    return this.getDriverData(driverName)?.photo;
  }

  public getTripHistoryData(vehicleId: string) {
    return this.tripHistoryData.find(data => data.vehicleId === vehicleId)?.tripHistory;
  }

  public getMaintenanceData(vehicleId: string) {
    return this.maintenanceData.find(data => data.vehicleId === vehicleId)?.maintenance;
  }

  public getCostsPerTypeData(vehicleId: string, period: any) {
    const dataItem = this.costData.find(data => data.vehicleId === vehicleId) as any;
    const costPerTypeData = dataItem.costPerType;

    return costPerTypeData[period];
  }

  public getCostsPerMeterData(vehicleId: string, period: any) {
    const dataItem = this.costData.find(data => data.vehicleId === vehicleId) as any;
    const costPerMeterData = dataItem.costsPerMeterPerQuarter;

    return costPerMeterData[period];
  }

  public getFuelCostsData(vehicleId: string, period: any) {
    const dataItem = this.costData.find(data => data.vehicleId === vehicleId) as any;
    const fuelCostsPerMonth = dataItem.fuelCostsPerMonth;

    if (this.fuelCostsCache[vehicleId + period]) {
      return this.fuelCostsCache[vehicleId + period];
    }

    let fuelCostsPerMonthPeriod: any[];

    switch (period) {
      case 'ytd':
      case '12months':
        fuelCostsPerMonthPeriod = fuelCostsPerMonth;
        break;
      case '6months':
        fuelCostsPerMonthPeriod = [...fuelCostsPerMonth].splice(-6);
        break;
      case '3months':
        fuelCostsPerMonthPeriod = [...fuelCostsPerMonth].splice(-3);
        break;
      default:
        console.warn("Invalid period:", period);
        return [];
    }

    this.fuelCostsCache[vehicleId + period] = fuelCostsPerMonthPeriod;

    return fuelCostsPerMonthPeriod;
  }

  public getUtilizationData(vehicleId: string) {
    const dataItem = this.utilizationData.find(data => data.vehicleId === vehicleId);
    return dataItem ? dataItem.utilization : []
  }
}
