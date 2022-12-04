import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsJournalComponent } from './reports-journal.component';

describe('ReportsJournalComponent', () => {
  let component: ReportsJournalComponent;
  let fixture: ComponentFixture<ReportsJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
