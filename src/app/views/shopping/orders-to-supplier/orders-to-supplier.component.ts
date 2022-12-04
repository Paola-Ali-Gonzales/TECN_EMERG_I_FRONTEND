import { Component, OnInit } from '@angular/core';
export interface Orders {
  referencia: string;
  proveedor: string;
  solicitante: string;
  fechaPedido: string;
  fechaLlegada: string;
  baseImponible: string;
  estado: string;
  facturado:string;
}
const ELEMENT_DATA: Orders[] = [
  {referencia: 'Compra 45', proveedor: 'Kriss', solicitante: 'Juan Perez',  fechaPedido:'10-11-2020', fechaLlegada:'15-12-2020', baseImponible:'15', estado:'entregado', facturado:'Si'},

];


@Component({
  selector: 'app-orders-to-supplier',
  templateUrl: './orders-to-supplier.component.html',
  styleUrls: ['./orders-to-supplier.component.css']
})
export class OrdersToSupplierComponent implements OnInit {
  displayedColumns: string[] = ['referencia','proveedor','solicitante','fechaPedido','fechaLlegada', 'baseImponible','estado','facturado','acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  
}
