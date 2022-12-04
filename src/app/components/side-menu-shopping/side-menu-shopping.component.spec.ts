import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuShoppingComponent } from './side-menu-shopping.component';

describe('SideMenuShoppingComponent', () => {
  let component: SideMenuShoppingComponent;
  let fixture: ComponentFixture<SideMenuShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
