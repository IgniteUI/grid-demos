import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    IgxAvatarComponent,
} from 'igniteui-angular';
import { NgIf } from '@angular/common';
import { InventoryList } from '../data/erpData';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { dropbox, delivery, billPaid, check } from '@igniteui/material-icons-extended';
import { OrderStatus, TemplateDataModel } from '../data/dataModels';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-erp-hgrid-sample',
  standalone: true,
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
    IgxGridToolbarAdvancedFilteringComponent,
    IgxGridToolbarTitleComponent,
    IgxIconModule,
    IgxBadgeModule,
    IgxBadgeComponent,
    IgxAvatarComponent,
    NgIf
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './erp-hgrid-sample.component.html',
  styleUrl: './erp-hgrid-sample.component.scss'
})
export class ErpHgridSampleComponent {
  public hgridData: TemplateDataModel[];
  public selectionMode: GridSelectionMode = 'multiple';
  public orderStatus = OrderStatus;

  // Styles
  public columnCenteredStyles = {
    display: 'flex',
    justifyContent: 'center'
  }
  public headerCenteredStyles = {
    textAlign: 'center'
  }
  public rowStyles = {
    background: 'white'
  }

  constructor(private iconService: IgxIconService) {
      this.hgridData = InventoryList;
      this.iconService.addSvgIconFromText(dropbox.name, dropbox.value, 'imx-icons');
      this.iconService.addSvgIconFromText(delivery.name, delivery.value, 'imx-icons');
      this.iconService.addSvgIconFromText(billPaid.name, billPaid.value, 'imx-icons');
      this.iconService.addSvgIconFromText(check.name, check.value, 'imx-icons');
  }

  public getTooltipText(expanded: any) {
    return expanded ?
        'The column is expanded! Click here to collapse.' : 'The column is collapsed! Click here to expand';
  }
}
