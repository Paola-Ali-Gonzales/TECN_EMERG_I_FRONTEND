import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalPrincipalComponent } from './journal-principal.component';

describe('JournalPrincipalComponent', () => {
  let component: JournalPrincipalComponent;
  let fixture: ComponentFixture<JournalPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
