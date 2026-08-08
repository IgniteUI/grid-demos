import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxBadgeModule } from 'igniteui-angular/badge';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSparklineModule } from 'igniteui-angular-charts';
import { IgxCsvExporterService, IgxExcelExporterService, IgxPdfExporterService, type IColumnExportingEventArgs } from 'igniteui-angular/grids/core';

type FinanceTone = 'blue' | 'orange' | 'green' | 'slate' | 'gold' | 'red';

interface PriceTrendPoint {
  value: number;
}

interface FinanceSeedRow {
  ticker: string;
  company: string;
  lastPrice: number;
  changePct: number;
  marketValue: number;
  netProfit: number;
  netProfitPct: number;
  allocationPct: number;
  averageCost: number;
  position: number;
  holdingPeriodDays: number;
  tone: FinanceTone;
}

interface FinanceRow extends FinanceSeedRow {
  priceTrend: PriceTrendPoint[];
}

@Component({
  standalone: true,
  selector: 'app-finance-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    IgxAvatarModule,
    IgxBadgeModule,
    IgxSparklineModule,
    IgxGridComponent,
    IgxColumnComponent,
    IgxCellTemplateDirective,
    IgxGridToolbarComponent,
    IgxGridToolbarTitleComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarHidingComponent,
    IgxGridToolbarPinningComponent,
    IgxGridToolbarExporterComponent
  ],
  templateUrl: './finance-grid.component.html',
  styleUrl: './finance-grid.component.scss',
})
export class FinanceGridComponent implements OnInit, OnDestroy {
  protected readonly vm = this;

  private readonly excelExporter = inject(IgxExcelExporterService);
  private readonly csvExporter = inject(IgxCsvExporterService);
  private readonly pdfExporter = inject(IgxPdfExporterService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  private readonly percentFormatter = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  private readonly financeNonExportableFields = new Set(['priceTrend']);
  private readonly viewportWidth = signal(isPlatformBrowser(this.platformId) ? window.innerWidth : 1280);
  private readonly resizeHandler = (): void => this.viewportWidth.set(window.innerWidth);

  private readonly financeSeedRows: FinanceSeedRow[] = [
    { ticker: 'AMD', company: 'Advanced Micro Devices Inc.', lastPrice: 130.36, changePct: 0, marketValue: 3128.64, netProfit: 1315.68, netProfitPct: 72.57, allocationPct: 4.38, averageCost: 75.54, position: 24, holdingPeriodDays: 157, tone: 'blue' },
    { ticker: 'ETH', company: 'Ethereum', lastPrice: 3567.93, changePct: -0.2, marketValue: 10073.79, netProfit: 3074.79, netProfitPct: 40.3, allocationPct: 18.43, averageCost: 2543, position: 3, holdingPeriodDays: 120, tone: 'slate' },
    { ticker: 'ABNB', company: 'Airbnb Inc.', lastPrice: 130.65, changePct: -0.77, marketValue: 3004.95, netProfit: 1709.59, netProfitPct: 131.98, allocationPct: 3.13, averageCost: 56.32, position: 23, holdingPeriodDays: 540, tone: 'red' },
    { ticker: 'BABA', company: 'Alibaba Group Holding Limited', lastPrice: 81.81, changePct: 1.22, marketValue: 981.72, netProfit: -310.92, netProfitPct: -24.05, allocationPct: 3.12, averageCost: 107.72, position: 12, holdingPeriodDays: 91, tone: 'orange' },
    { ticker: 'BTC', company: 'Bitcoin', lastPrice: 95300.86, changePct: 0.72, marketValue: 19060.17, netProfit: 7013.97, netProfitPct: 58.23, allocationPct: 29.1, averageCost: 60231, position: 0.2, holdingPeriodDays: 323, tone: 'gold' },
    { ticker: 'AAPL', company: 'Apple Inc.', lastPrice: 223.36, changePct: 0.45, marketValue: 245.7, netProfit: 76.07, netProfitPct: 44.84, allocationPct: 0.41, averageCost: 154.21, position: 1.1, holdingPeriodDays: 632, tone: 'slate' },
    { ticker: 'MSFT', company: 'Microsoft Corp.', lastPrice: 401.22, changePct: 0.5, marketValue: 280.85, netProfit: -20.15, netProfitPct: -6.69, allocationPct: 0.73, averageCost: 430, position: 0.7, holdingPeriodDays: 342, tone: 'blue' },
    { ticker: 'GOOGL', company: 'Alphabet Inc.', lastPrice: 160.02, changePct: 1.25, marketValue: 208.03, netProfit: -18.17, netProfitPct: -8.03, allocationPct: 0.55, averageCost: 174, position: 1.3, holdingPeriodDays: 376, tone: 'green' },
    { ticker: 'AMZN', company: 'Amazon.com Inc.', lastPrice: 205.87, changePct: 0.49, marketValue: 885.24, netProfit: -285.82, netProfitPct: -24.41, allocationPct: 2.83, averageCost: 272.34, position: 4.3, holdingPeriodDays: 352, tone: 'gold' },
    { ticker: 'TSLA', company: 'Tesla Inc.', lastPrice: 332.92, changePct: 0.9, marketValue: 1598.02, netProfit: 157.01, netProfitPct: 10.9, allocationPct: 3.48, averageCost: 300.21, position: 4.8, holdingPeriodDays: 452, tone: 'red' }
  ];

  protected readonly hideMostColumns = computed(() => this.viewportWidth() < 700);
  protected readonly financeRows: FinanceRow[] = this.financeSeedRows.map((row) => ({ ...row, priceTrend: this.buildPriceTrend(row.ticker, row.changePct) }));
  protected readonly maxAllocationPct = Math.max(...this.financeRows.map((row) => Math.abs(row.allocationPct)), 0);
  protected readonly financeAssetFilter = signal('');
  protected readonly filteredFinanceRows = computed(() => {
    const query = this.financeAssetFilter().trim().toLowerCase();
    if (!query) {
      return this.financeRows;
    }

    return this.financeRows.filter((row) => row.ticker.toLowerCase().includes(query) || row.company.toLowerCase().includes(query));
  });

  public ngOnInit(): void {
    this.configureExportExclusions();
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', this.resizeHandler);
    }
  }

  public ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  protected onFinanceAssetSearch(event: Event): void {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    this.financeAssetFilter.set(target.value);
  }

  protected financeAvatarInitials(ticker: string): string {
    const normalized = ticker.replace(/[^A-Z0-9]/gi, '').toUpperCase();
    return normalized.slice(0, 3) || 'EQ';
  }

  protected financeAvatarColor(tone: FinanceTone): string {
    const colors: Record<FinanceTone, string> = {
      blue: '#2f74c0',
      orange: '#d97b23',
      green: '#3ea35b',
      slate: '#5c7399',
      gold: '#c7a43b',
      red: '#bf4a4a'
    };

    return colors[tone];
  }

  protected formatCurrency(value: number): string {
    return this.currencyFormatter.format(value);
  }

  protected formatPercent(value: number): string {
    return `${this.percentFormatter.format(Math.abs(value))}%`;
  }

  protected badgeType(value: number): string {
    if (value > 0) return 'success';
    if (value < 0) return 'error';
    return 'info';
  }

  protected badgeLabel(value: number): string {
    const arrow = value > 0 ? '↑ ' : value < 0 ? '↓ ' : '';
    return `${arrow}${this.formatPercent(value)}`;
  }

  protected allocationWidth(value: number): string {
    const magnitude = Math.abs(value);
    if (magnitude === 0 || this.maxAllocationPct <= 0) {
      return '0%';
    }

    const scaled = (magnitude / this.maxAllocationPct) * 100;
    return `${Math.min(100, Math.max(6, scaled))}%`;
  }

  protected sparklineBrush(changePct: number): string {
    return changePct < 0 ? '#e34b4b' : '#1dbf63';
  }

  protected sparklineNegativeBrush(changePct: number): string {
    return changePct < 0 ? '#ff7a7a' : '#e34b4b';
  }

  private configureExportExclusions(): void {
    const skipChartColumns = (args: IColumnExportingEventArgs): void => {
      if (this.financeNonExportableFields.has(args.field)) {
        args.cancel = true;
      }
    };

    this.excelExporter.columnExporting.subscribe(skipChartColumns);
    this.csvExporter.columnExporting.subscribe(skipChartColumns);
    this.pdfExporter.columnExporting.subscribe(skipChartColumns);
  }

  private buildPriceTrend(ticker: string, changePct: number): PriceTrendPoint[] {
    const points = 30;
    const target = Number(changePct.toFixed(2));
    const volatility = Math.max(0.2, Math.min(1.15, Math.abs(changePct) * 0.55 + 0.25));
    const hashSeed = ticker.split('').reduce((acc, ch) => ((acc * 31) + ch.charCodeAt(0)) >>> 0, 2166136261);
    let seed = hashSeed;
    let value = 0;
    const series: PriceTrendPoint[] = [];

    const nextRandom = (): number => {
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return (seed >>> 0) / 4294967296;
    };

    for (let index = 0; index < points; index++) {
      const t = index / (points - 1);
      const directionalTarget = target * t;
      const randomStep = (nextRandom() - 0.5) * volatility;
      const pull = (directionalTarget - value) * 0.22;
      const microWave = Math.sin((t * Math.PI * 9) + (hashSeed % 11)) * 0.06;
      value += randomStep + pull + microWave;
      series.push({ value: Number(value.toFixed(2)) });
    }

    if (series.length > 0) {
      series[series.length - 1] = { value: target };
    }

    return series;
  }
}
