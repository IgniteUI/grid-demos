import { Injectable } from "@angular/core";
import { InventoryList } from "../data/erpData";
import { TemplateDataModel } from "../data/dataModels";

@Injectable({
  providedIn: "root",
})
export class ErpDataService {
  private products = InventoryList;

  public getProducts(): TemplateDataModel[] {
    this.setItemsSold();
    this.setTotalNetProfit();
    return this.products;
  }

  public getProductsJson() {
    const products = this.products.map(({ unitsSold, totalNetProfit, salesTrendData, ...rest }) => rest);
    const productsJSON = JSON.stringify(products);
    return productsJSON;
  }

  private setItemsSold(): void {
    // add itemsSold property to each record based on the data in the chart
    this.products.forEach((item: TemplateDataModel) => {
      const lastItemIndex = item.salesTrendData.length - 1;
      item.unitsSold = item.salesTrendData[lastItemIndex].unitsSold;
    });
  }

  private calculateTotalNetProfit(product: TemplateDataModel): number {
    const unitsSold: number = product.unitsSold || 0;
    return unitsSold * (product.netPrice);
  }

  private setTotalNetProfit(): void {
    this.products.forEach(product => product.totalNetProfit = this.calculateTotalNetProfit(product));
  }
}
