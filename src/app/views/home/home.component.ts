import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { IgxCardModule, IgxChipComponent, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective, IgxTabsModule, IgxTooltipModule } from 'igniteui-angular';

interface TabInfo {
  title: string;
  theme: string;
  content: string;
  moreLink: string;
  downloadLink: string;
}

@Component({
  standalone: true,
  selector: 'home-view',
  imports: [CommonModule, RouterModule, RouterLinkActive, IgxChipComponent, IgxIconComponent,
    IgxRippleDirective, IgxIconButtonDirective, IgxTabsModule, IgxTooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  public tabInfo = new Map<string, TabInfo>([
    ['inventory', {
      title: "ERP/ Inventory",
      theme: "Material Light",
      content: "Tracking and managing quantity, location and details of products in stock.",
      moreLink: "https://www.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid/hierarchical-grid",
      downloadLink: "https://www.infragistics.com/resources/sample-applications/erp-inventory-sample-app"
    }],
    ['hr-portal', {
      title: "Org Chart/HR Portal",
      theme: "Fluent Light",
      content: "Displaying company's hierarchical structure and showing employees data.",
      moreLink: "https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/tree-grid",
      downloadLink: "https://www.infragistics.com/resources/sample-applications/org-charthr-portal-sample-app"
    }],
    ['finance', {
      title: "Financial Portfolio",
      theme: "Bootstrap Light",
      content: "Asset tracking, profit and loss analysis, featuring interactive dynamic charts.",
      moreLink: "https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid",
      downloadLink: "https://www.infragistics.com/resources/sample-applications/financial-portfolio-sample-app"
    }],
    ['sales', {
      title: "Sales Dashboard",
      theme: "Indigo Light",
      content: "For trend analysis, KPIs and viewing sales summaries by region, product, etc.",
      moreLink: "https://www.infragistics.com/products/ignite-ui-angular/angular/components/pivotGrid/pivot-grid",
      downloadLink: "https://www.infragistics.com/resources/sample-applications/sales-grid-sample-app"
    }],
    ['fleet', {
      title: "Fleet Management",
      theme: "Material Dark",
      content: "A master-detail grid for managing vehicle acquisition, operations, and maintenance.",
      moreLink: "https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/master-detail",
      downloadLink: "https://www.infragistics.com/resources/sample-applications/fleet-management-sample-app"
    }],
  ]);

  public onLinkClick(event: MouseEvent) {
    const targetHTML = event.currentTarget as HTMLAnchorElement;
    window.open(targetHTML.href, '_blank')?.focus();

    event.preventDefault();
    event.stopPropagation();
  }

  public onDownloadClick(event: MouseEvent, tabName: string) {
    const downloadLink = this.tabInfo.get(tabName)?.downloadLink;
    window.open(downloadLink, '_blank')?.focus();

    event.preventDefault();
    event.stopPropagation();
  }
}
