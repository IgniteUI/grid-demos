import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCheckboxModule, IgxDatePickerModule, IgxTreeGridModule } from 'igniteui-angular';
import { HrPortalComponent } from './hr-portal.component';

describe('TreeGrid1Component', () => {
  let component: HrPortalComponent;
  let fixture: ComponentFixture<HrPortalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, IgxTreeGridModule, IgxDatePickerModule, IgxCheckboxModule, HrPortalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
