import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LoadScriptsService } from 'src/app/load-scripts.service';

export interface Journal {
  account: string;
  should: number;
  haber: number;
 
}


@Component({
  selector: 'app-journal-principal',
  templateUrl: './journal-principal.component.html',
  styleUrls: ['./journal-principal.component.css']
})
export class JournalPrincipalComponent implements OnInit {

  ELEMENT_DATA: Journal[] = [
    {account: '15648-5645', should: 456,haber:1000 },
    {account: '15656-5645', should: 300,haber:800 },
    {account: '15656-5645', should: 300,haber:800 },
 
  ];

  displayedColumns: string[] = ['account','should', 'haber'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
 
  constructor(private _LoadScripts:LoadScriptsService) {
    _LoadScripts.Load(["journal_type"])
  }
 


  ngOnInit(): void {
  }

}
