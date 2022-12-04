import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface SeePurchase {
  
  product: string;
  total: number;
}

@Component({
  selector: 'app-see-purchases',
  templateUrl: './see-purchases.component.html',
  styleUrls: ['./see-purchases.component.css']
})
export class SeePurchasesComponent implements OnInit {
  ELEMENT_DATA: SeePurchase[] = [
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
