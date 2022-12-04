import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSalesJournalComponent } from './see-sales-journal.component';

describe('SeeSalesJournalComponent', () => {
  let component: SeeSalesJournalComponent;
  let fixture: ComponentFixture<SeeSalesJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSalesJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeSalesJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
