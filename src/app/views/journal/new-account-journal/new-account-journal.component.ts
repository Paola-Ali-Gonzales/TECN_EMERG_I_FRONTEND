import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
export interface Journal {
  code: number;
  denomination: string;
 
}

@Component({
  selector: 'app-new-account-journal',
  templateUrl: './new-account-journal.component.html',
  styleUrls: ['./new-account-journal.component.css']
})
export class NewAccountJournalComponent implements OnInit {

  ELEMENT_DATA: Journal[] = [
    {code: 15648-5645, denomination: 'Cuenta de banco union' },
    {code: 895235, denomination: 'Cuenta de BNB' },
    {code: 23443567, denomination: 'Cuenta de BCP' },
    {code: 2455789, denomination: 'Cuenta de ahorros' },
   
  ];
  displayedColumns: string[] = ['code','denomination','acciones'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
 
  ngOnInit(): void {
  }
}
