import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

/*Responsable:Valeria Delgadillo Datos estaticos, realizar clases y métodos según corresponda*/ 
export interface Manufacturing {
  date: string;
  quantity: number;
  product: string;  
}
@Component({
  selector: 'app-manufacturing-list',
  templateUrl: './manufacturing-list.component.html',
  styleUrls: ['./manufacturing-list.component.css']
})
export class ManufacturingListComponent implements OnInit {

  ELEMENT_DATA: Manufacturing[] = [
    {date: '10-11-2022', quantity: 100 ,product:'Taza de arcilla'},
    {date: '09-08-2022', quantity: 50 ,product:'manillas'},
    {date: '07-08-2022', quantity: 2 ,product:'Cuadros'},
    {date: '10-11-2022', quantity: 100 ,product:'Taza de arcilla'},
    {date: '09-08-2022', quantity: 50 ,product:'manillas'},
    {date: '07-08-2022', quantity: 2 ,product:'Cuadros'},
    {date: '10-11-2022', quantity: 100 ,product:'Taza de arcilla'},
    {date: '09-08-2022', quantity: 50 ,product:'manillas'},
    {date: '07-08-2022', quantity: 2 ,product:'Cuadros'},
  ];
  displayedColumns: string[] = ['date','quantity', 'product','acciones'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
