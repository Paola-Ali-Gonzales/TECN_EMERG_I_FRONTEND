import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface SeeSales {
  
  product: string;
  total: number;
}

@Component({
  selector: 'app-see-sales-journal',
  templateUrl: './see-sales-journal.component.html',
  styleUrls: ['./see-sales-journal.component.css']
})
export class SeeSalesJournalComponent implements OnInit {

  ELEMENT_DATA: SeeSales[] = [
    {product: 'Shampoo', total: 300},
    {product: 'Agua', total: 500},
    {product: 'Chicles', total: 200},
    {product: 'Torta', total: 1000},

  ];
  displayedColumns: string[] = ['product','total','acciones'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor() { }
  ngOnInit(): void {
  }

}
