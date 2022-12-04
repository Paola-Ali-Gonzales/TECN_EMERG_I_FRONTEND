import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloVentasComponent } from './modulo-ventas.component';

describe('ModuloVentasComponent', () => {
  let component: ModuloVentasComponent;
  let fixture: ComponentFixture<ModuloVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


/*import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasComponent } from './ventas.component';

describe('VentasComponent', () => {
  let component: VentasComponent;
  let fixture: ComponentFixture<VentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */