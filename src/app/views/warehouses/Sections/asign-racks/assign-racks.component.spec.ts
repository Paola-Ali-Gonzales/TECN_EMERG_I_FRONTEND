import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRacksComponent } from './assign-racks.component';

describe('AssignRacksComponent', () => {
  let component: AssignRacksComponent;
  let fixture: ComponentFixture<AssignRacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignRacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignRacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
