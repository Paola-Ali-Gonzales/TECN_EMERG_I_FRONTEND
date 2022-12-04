import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarBusinessComponent } from './top-nav-bar-business.component';

describe('TopNavBarBusinessComponent', () => {
  let component: TopNavBarBusinessComponent;
  let fixture: ComponentFixture<TopNavBarBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavBarBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavBarBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
