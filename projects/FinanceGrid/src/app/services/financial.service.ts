import { Injectable } from '@angular/core';
import DATA from '../data/data.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinancialService {
  public records: BehaviorSubject<any>;
  constructor() {
    this.records = new BehaviorSubject([]);
  }

  public getData() {
    const currData = DATA;
    const totalPortfolioInvestment = currData.reduce((acc: any, x: any) => {
      acc += x.value.boughtPrice * x.positions;
      return acc;
    }, 0);
    currData.forEach((record: any) => {
      record['profitLossValue'] = this.calculateProfitLossValue(
        record.value.currentPrice,
        record.value.boughtPrice,
        record.positions
      );

      record['profitLossPercentage'] = this.calculateProfitLossPercentage(
        record.profitLossValue,
        record.value.boughtPrice,
        record.positions
      );

      const totalInitialInvestment =
        record.value.boughtPrice * record.positions;
      record['allocation'] = parseFloat(
        (totalInitialInvestment / totalPortfolioInvestment).toFixed(4)
      );
    });
    this.records.next(currData);
  }

  public updateAllPrices(data: any) {
    for (const dataRow of data) {
      const randomizedData = this.randomizeData(dataRow);
      dataRow.value.currentPrice = randomizedData.newPrice;
      dataRow.profitLossValue = randomizedData.profitLossValue;
      dataRow.profitLossPercentage = randomizedData.profitLossPercentage;
    }
    this.records.next(Array.from(data));
  }

  private calculateProfitLossValue(
    currentPrice: number,
    boughtPrice: number,
    positions: number
  ) {
    const profitLossValue = (currentPrice - boughtPrice) * positions;
    return parseFloat(profitLossValue.toFixed(2));
  }

  private calculateProfitLossPercentage(
    profitLossValue: number,
    boughtPrice: number,
    positions: number
  ) {
    const totalInitialInvestment = boughtPrice * positions;
    const profitLossPercentage = profitLossValue / totalInitialInvestment;
    return parseFloat(profitLossPercentage.toFixed(4));
  }

  private randomizeData(dataRow: any): {
    newPrice: number;
    profitLossValue: number;
    profitLossPercentage: number;
  } {
    const rnd = parseFloat(Math.random().toFixed(2));
    const volatility = 2; // Maximum percentage change of a price will be either -2% or 2%

    let changePercent = 2 * volatility * rnd; // this can exceed volatility when rnd is > 0.5
    if (changePercent > volatility) {
      // if exceeds then make the change percentage negative
      changePercent -= 2 * volatility;
    }
    const changeAmount = dataRow.value.currentPrice * (changePercent / 100);
    const newPrice = parseFloat(
      (dataRow.value.currentPrice + changeAmount).toFixed(2)
    );
    const newProfitLossValue = this.calculateProfitLossValue(
      newPrice,
      dataRow.value.boughtPrice,
      dataRow.positions
    );
    const newProfitLossPercentage = this.calculateProfitLossPercentage(
      newProfitLossValue,
      dataRow.value.boughtPrice,
      dataRow.positions
    );
    const result = {
      newPrice,
      profitLossValue: newProfitLossValue,
      profitLossPercentage: newProfitLossPercentage,
    };
    return result;
  }
}
