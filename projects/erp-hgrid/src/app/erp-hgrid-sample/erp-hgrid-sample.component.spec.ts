import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpHGridSampleComponent } from './erp-hgrid-sample.component';

describe('ErpHGridSampleComponent', () => {
  let component: ErpHGridSampleComponent;
  let fixture: ComponentFixture<ErpHGridSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpHGridSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpHGridSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
