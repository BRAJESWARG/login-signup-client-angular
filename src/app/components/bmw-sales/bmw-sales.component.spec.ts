import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwSalesComponent } from './bmw-sales.component';

describe('BmwSalesComponent', () => {
  let component: BmwSalesComponent;
  let fixture: ComponentFixture<BmwSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmwSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmwSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
