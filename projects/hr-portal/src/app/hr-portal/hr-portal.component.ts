import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { IgcGridLite } from 'igniteui-grid-lite';
import type { IgcCellContext } from 'igniteui-grid-lite';
import { IgcAvatarComponent, IgcRatingComponent } from 'igniteui-webcomponents';
import { html, type TemplateResult } from 'lit';

IgcGridLite.register();
IgcAvatarComponent.register();
IgcRatingComponent.register();

interface EmployeeRecord {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  satisfactionRating: number;
  employmentType: 'Full-Time' | 'Part-Time' | 'Contract';
  emailAddress: string;
  department: 'Finance' | 'Engineering' | 'Marketing' | 'Sales';
  registeredOn: string;
}

@Component({
  selector: 'app-hr-portal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hr-portal.component.html',
  styleUrl: './hr-portal.component.scss'
})
export class HrPortalComponent {
  protected readonly vm = this;

  protected readonly employees: EmployeeRecord[] = [
    { avatarUrl: 'https://i.pravatar.cc/48?img=5', firstName: 'Grace', lastName: 'Moore', satisfactionRating: 4, employmentType: 'Contract', emailAddress: 'grace.moore@example.com', department: 'Finance', registeredOn: 'Aug 19, 2025, 11:58:46 PM' },
    { avatarUrl: 'https://i.pravatar.cc/48?img=11', firstName: 'Charlie', lastName: 'Jones', satisfactionRating: 3, employmentType: 'Part-Time', emailAddress: 'charlie.jones@example.com', department: 'Finance', registeredOn: 'Apr 3, 2026, 7:13:25 AM' },
    { avatarUrl: 'https://i.pravatar.cc/48?img=36', firstName: 'Jane', lastName: 'Davis', satisfactionRating: 5, employmentType: 'Full-Time', emailAddress: 'jane.davis@example.com', department: 'Marketing', registeredOn: 'Sep 21, 2025, 11:13:08 AM' },
    { avatarUrl: 'https://i.pravatar.cc/48?img=42', firstName: 'Kate', lastName: 'Jackson', satisfactionRating: 4, employmentType: 'Full-Time', emailAddress: 'kate.jackson@example.com', department: 'Engineering', registeredOn: 'Dec 19, 2025, 11:53:02 PM' },
    { avatarUrl: 'https://i.pravatar.cc/48?img=72', firstName: 'John', lastName: 'Brown', satisfactionRating: 5, employmentType: 'Full-Time', emailAddress: 'john.brown@example.com', department: 'Finance', registeredOn: 'Nov 19, 2025, 1:07:22 AM' }
  ];

  protected readonly employeeAvatarCellTemplate = (context: IgcCellContext<EmployeeRecord>): TemplateResult => {
    const employee = context.row.data;
    if (!employee) {
      return html``;
    }

    const initials = this.employeeInitials(employee);
    const background = this.employeeAvatarColor(employee);

    return html`
      <div style="display:flex; align-items:center; justify-content:center;">
        <igc-avatar class="employee-directory-avatar" shape="circle" initials="${initials}" aria-label="${employee.firstName} ${employee.lastName}" style="--ig-avatar-size:32px; --ig-avatar-background:${background}; --ig-avatar-color:#ffffff;"></igc-avatar>
      </div>
    `;
  };

  protected readonly employeeRegisteredOnCellTemplate = (context: IgcCellContext<EmployeeRecord>): TemplateResult => {
    const employee = context.row.data;
    if (!employee) {
      return html``;
    }

    return html`<span style="display:block; white-space:normal; line-height:1.25; overflow-wrap:break-word;">${employee.registeredOn}</span>`;
  };

  protected readonly employeeRatingCellTemplate = (context: IgcCellContext<EmployeeRecord>): TemplateResult => {
    const employee = context.row.data;
    if (!employee) {
      return html``;
    }

    return html`<igc-rating readonly .value=${employee.satisfactionRating} .max=${5} style="--symbol-full-color:#f0a12c; --symbol-empty-color:#c0c8d3;"></igc-rating>`;
  };

  protected readonly employeeEmploymentCellTemplate = (context: IgcCellContext<EmployeeRecord>): TemplateResult => {
    const employee = context.row.data;
    if (!employee) {
      return html``;
    }

    const type = employee.employmentType;
    return html`<span style="${this.employeeEmploymentPillStyle(type)}">${type}</span>`;
  };

  protected readonly employeeDepartmentCellTemplate = (context: IgcCellContext<EmployeeRecord>): TemplateResult => {
    const employee = context.row.data;
    if (!employee) {
      return html``;
    }

    const department = employee.department;
    return html`<span style="${this.employeeDepartmentPillStyle(department)}">${department}</span>`;
  };

  protected employeeEmploymentPillStyle(type: EmployeeRecord['employmentType']): string {
    if (type === 'Full-Time') return this.pillStyle('var(--pill-positive-bg)', 'var(--pill-positive-text)');
    if (type === 'Part-Time') return this.pillStyle('var(--pill-proposal-bg)', 'var(--pill-proposal-text)');
    return this.pillStyle('var(--pill-negotiation-bg)', 'var(--pill-negotiation-text)');
  }

  protected employeeDepartmentPillStyle(department: EmployeeRecord['department']): string {
    if (department === 'Finance') return this.pillStyle('var(--pill-positive-bg)', 'var(--pill-positive-text)');
    if (department === 'Engineering') return this.pillStyle('var(--pill-negotiation-bg)', 'var(--pill-negotiation-text)');
    if (department === 'Marketing') return this.pillStyle('var(--pill-proposal-bg)', 'var(--pill-proposal-text)');
    return this.pillStyle('var(--pill-negative-bg)', 'var(--pill-negative-text)');
  }

  private pillStyle(background: string, color: string): string {
    return `display:inline-flex; align-items:center; border-radius:999px; padding:0.15rem 0.48rem; font-size:0.75rem; font-weight:600; background:${background}; color:${color};`;
  }

  private employeeAvatarColor(employee: EmployeeRecord): string {
    const palette = ['#4f6bed', '#2ab184', '#f0a12c', '#d84b98', '#5b6678', '#3f8cff'];
    const seed = `${employee.firstName}${employee.lastName}`;
    let hash = 0;

    for (const char of seed) {
      hash = (hash << 5) - hash + char.charCodeAt(0);
      hash |= 0;
    }

    return palette[Math.abs(hash) % palette.length];
  }

  private employeeInitials(employee: EmployeeRecord): string {
    return `${employee.firstName.charAt(0)}${employee.lastName.charAt(0)}`.toUpperCase();
  }
}
