import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwSalesChartsComponent } from './bmw-sales-charts.component';

describe('BmwSalesChartsComponent', () => {
  let component: BmwSalesChartsComponent;
  let fixture: ComponentFixture<BmwSalesChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmwSalesChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmwSalesChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
