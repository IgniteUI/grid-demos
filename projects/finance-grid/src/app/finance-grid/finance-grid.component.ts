import {
  afterNextRender,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  IgxAvatarComponent,
  IgxCellTemplateDirective,
  IgxColumnComponent,
  IgxGridComponent,
  IgxGridToolbarActionsComponent,
  IgxGridToolbarAdvancedFilteringComponent,
  IgxGridToolbarComponent,
  IgxGridToolbarExporterComponent,
  IgxGridToolbarHidingComponent,
  IgxGridToolbarPinningComponent,
  IgxGridToolbarTitleComponent,
  IgxIconComponent,
  IgxLinearProgressBarComponent,
  IgxPaginatorComponent,
  THEME_TOKEN,
  ThemeToken,
} from 'igniteui-angular';
import { CurrencyPipe, PercentPipe, AsyncPipe } from '@angular/common';
import { FinancialService } from '../services/financial.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-finance-grid',
  providers: [
    {
      provide: THEME_TOKEN,
      useFactory: () => {
        return new ThemeToken('bootstrap');
      },
    },
  ],
  imports: [
    CurrencyPipe,
    PercentPipe,
    AsyncPipe,
    IgxLinearProgressBarComponent,
    IgxAvatarComponent,
    IgxGridComponent,
    IgxColumnComponent,
    IgxCellTemplateDirective,
    IgxIconComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarTitleComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarAdvancedFilteringComponent,
    IgxGridToolbarHidingComponent,
    IgxGridToolbarPinningComponent,
    IgxGridToolbarExporterComponent,
    IgxPaginatorComponent,
  ],
  templateUrl: './finance-grid.component.html',
  styleUrl: './finance-grid.component.scss'
})
export class FinanceGridComponent implements OnInit, OnDestroy {
  @ViewChild(IgxGridComponent, { static: true }) public grid!: IgxGridComponent;
  public data$: BehaviorSubject<any> = new BehaviorSubject([]);
  public isLoading = true;

  public profitLossValueClasses = {
    profitCondition: this.profitConditionHandler,
    lossCondition: this.lossConditionHandler,
  };
  private _timer!: ReturnType<typeof setInterval>;
  private readonly updateTimerInMs = 3000;
  constructor(private financialService: FinancialService) {
    afterNextRender({
      write: () => {
        this._timer = setInterval(() => {
          this.financialService.updateAllPrices(this.grid.data);
          this.grid.markForCheck();
        }, this.updateTimerInMs);
      },
    });
  }

  public ngOnInit(): void {
    this.financialService.getData();
    this.data$ = this.financialService.records;
    this.data$.subscribe((data) => {
      if (data.length !== 0) {
        this.isLoading = false;
      }
    });
  }

  public ngOnDestroy(): void {
    if (this._timer) {
      clearInterval(this._timer);
    }
  }

  protected getPathToImage(companyName: string) {
    return `companies/${companyName.split(' ')[0]}.png`;
  }

  private profitConditionHandler(rowData: any, columnKey: string) {
    return rowData[columnKey] >= 0;
  }

  private lossConditionHandler(rowData: any, columnKey: string) {
    return rowData[columnKey] < 0;
  }
}
