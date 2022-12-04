import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-journal',
  templateUrl: './reports-journal.component.html',
  styleUrls: ['./reports-journal.component.css']
})
export class ReportsJournalComponent implements OnInit {
  selected: Date | null;

  constructor() { }

  ngOnInit(): void {
  }

}
