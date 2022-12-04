import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';//Nota:si se desea gargar pocos datos es posible usar esta función de material angular que muestra en la tabla de a 5 filas
import { MatTableDataSource } from '@angular/material/table';

/*Responsable:Valeria Delgadillo Datos estaticos, realizar clases y métodos según corresponda*/ 
export interface Supplier {
  name: string;
  address: string;
  phone: number;
  email: string;
  products: number;
}

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

export class SupplierComponent implements OnInit {
  ELEMENT_DATA: Supplier[] = [
    {name: 'Jose', address: 'Av.Circunvalacion',phone: 78956423, email: 'Jose@gmail', products: 78},
    {name: 'Sandra Alcocer', address: 'Av.Circunvalacion',phone: 78956423, email: 'Alcocer@gmail', products: 5},
    {name: 'Juan Perez', address: 'Av.Circunvalacion',phone: 78956423, email: 'Juan@gmail', products: 9},
    {name: 'Juan Perez', address: 'Av.Circunvalacion',phone: 78956423, email: 'Juan@gmail', products: 8},
    {name: 'Juan Perez', address: 'Av.Circunvalacion',phone: 78956423, email: 'Juan@gmail', products: 12},
    {name: 'Pedro Candioti', address: 'Av.Circunvalacion',phone: 78956423, email: 'Candioti@gmail', products: 10}, 
  ];
  displayedColumns: string[] = ['name','address', 'phone', 'email', 'products','acciones'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
  constructor() { }

  ngOnInit(): void {
  }

  
  /*filtro para buscar proveedores por letra
  Agregar metodos si lo ven conveniente*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*Agregar metodos para eliminar proveedores*/

}
