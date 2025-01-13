import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpHgridSampleComponent } from './erp-hgrid-sample.component';

describe('ErpHgridSampleComponent', () => {
  let component: ErpHgridSampleComponent;
  let fixture: ComponentFixture<ErpHgridSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpHgridSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpHgridSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
