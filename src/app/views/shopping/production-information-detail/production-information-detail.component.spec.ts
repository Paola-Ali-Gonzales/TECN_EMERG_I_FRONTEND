import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionInformationDetailComponent } from './production-information-detail.component';

describe('ProductionInformationDetailComponent', () => {
  let component: ProductionInformationDetailComponent;
  let fixture: ComponentFixture<ProductionInformationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionInformationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
