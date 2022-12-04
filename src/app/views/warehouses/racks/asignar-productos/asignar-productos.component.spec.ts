import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProductosComponent } from './asignar-productos.component';

describe('AsignarProductosComponent', () => {
  let component: AsignarProductosComponent;
  let fixture: ComponentFixture<AsignarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
