import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePurchasesComponent } from './see-purchases.component';

describe('SeePurchasesComponent', () => {
  let component: SeePurchasesComponent;
  let fixture: ComponentFixture<SeePurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePurchasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
