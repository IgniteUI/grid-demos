import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { IgxCardModule, IgxChipComponent, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective, IgxTabsModule, IgxTooltipDirective, IgxTooltipModule } from 'igniteui-angular';

interface TabInfo {
  title: string;
  theme: string;
  content: string;
  moreLink: string;
  downloadLink: string;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, IgxChipComponent, IgxIconComponent, IgxRippleDirective,
    IgxIconButtonDirective, IgxTabsModule, IgxCardModule,RouterLinkActive, IgxTooltipModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GridDemos';
  public tabInfo = new Map<string, TabInfo>([
    ['inventory', {
      title: "ERP/Inventory",
      theme: "Material Light",
      content: "Tracking and managing quantity, location and details of products in stock.",
      moreLink: "https://github.com/IgniteUI/grid-demos/tree/vnext/projects/erp-hgrid",
      downloadLink: ""
    }],
    ['hr-portal', {
      title: "Org Chart/HR Portal",
      theme: "Fluent Light",
      content: "Displaying company's hierarchical structure and showing employees data.",
      moreLink: "https://github.com/IgniteUI/grid-demos/tree/vnext/projects/hr-portal",
      downloadLink: ""
    }],
    ['finance', {
      title: "Financial Portfolio",
      theme: "Bootstrap Light",
      content: "Asset tracking, profit and loss analysis, featuring interactive dynamic charts.",
      moreLink: "https://github.com/IgniteUI/grid-demos/tree/vnext/projects/finance-grid",
      downloadLink: ""
    }],
    ['sales', {
      title: "Sales Dashboard",
      theme: "Indigo Light",
      content: "For trend analysis, KPIs and viewing sales summaries by region, product, etc.",
      moreLink: "https://github.com/IgniteUI/grid-demos/tree/vnext/projects/sales-grid",
      downloadLink: ""
    }],
    ['fleet', {
      title: "Fleet Management",
      theme: "Material Dark",
      content: "A master-detail grid for managing vehicle acquisition, operations, and maintenance.",
      moreLink: "https://github.com/IgniteUI/grid-demos/tree/vnext/projects/fleet-management-grid",
      downloadLink: ""
    }],
  ]);

  public onLinkClick(event: MouseEvent) {
    const targetHTML = event.currentTarget as HTMLAnchorElement;
    if (!targetHTML.className.includes("--disabled")) {
      window.open(targetHTML.href, '_blank')?.focus();
    }

    event.preventDefault();
    event.stopPropagation();
  }

  public onDownloadClick(event: MouseEvent, tabName: string) {
    const targetHTML = event.currentTarget as HTMLAnchorElement;
    if (!targetHTML.className.includes("--disabled")) {
      console.log("Downloading app source!");
    }

    event.preventDefault();
    event.stopPropagation();
  }
}
