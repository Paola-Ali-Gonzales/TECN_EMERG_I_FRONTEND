import { Component, OnInit } from '@angular/core';
export interface BudgetList {
  referencia: string;
  descripcion: string;
  tasaIva: string;
  precioUnitario: string;
  cantidad: string;
  descuento: string;
}
const ELEMENT_DATA: BudgetList[] = [
  {referencia: 'Primer Pedido', descripcion: 'una descripcion', tasaIva: '15%',  precioUnitario:'78Bs', cantidad:'15', descuento:'17%'},
];
@Component({
  selector: 'app-new-supplier-order',
  templateUrl: './new-supplier-order.component.html',
  styleUrls: ['./new-supplier-order.component.css']
})
export class NewSupplierOrderComponent implements OnInit {
  displayedColumns: string[] = ['referencia','descripcion','tasaIva','precioUnitario','cantidad', 'descuento'];
  dataSource = ELEMENT_DATA;
  constructor() { }


  ngOnInit(): void {
  }

}
