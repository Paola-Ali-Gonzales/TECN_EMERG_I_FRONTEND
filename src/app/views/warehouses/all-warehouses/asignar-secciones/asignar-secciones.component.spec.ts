import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarSeccionesComponent } from './asignar-secciones.component';

describe('AsignarSeccionesComponent', () => {
  let component: AsignarSeccionesComponent;
  let fixture: ComponentFixture<AsignarSeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarSeccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarSeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
