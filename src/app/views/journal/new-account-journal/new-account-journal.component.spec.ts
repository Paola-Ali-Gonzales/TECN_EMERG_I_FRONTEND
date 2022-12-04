import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountJournalComponent } from './new-account-journal.component';

describe('NewAccountJournalComponent', () => {
  let component: NewAccountJournalComponent;
  let fixture: ComponentFixture<NewAccountJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAccountJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAccountJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
