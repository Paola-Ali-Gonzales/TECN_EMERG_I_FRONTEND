import { Component, OnInit } from '@angular/core';
export interface BudgetList {
  referencia: string;
  proveedor: string;
  ubicacion: string;
  numContacto: string;
  fecha: string;
  fechaFin: string;
  baseImponible: string;
  creador:string;
  estado:string;
}
const ELEMENT_DATA: BudgetList[] = [
  {referencia: 'Primer Presupuesto', proveedor: 'TED', ubicacion: 'Av. America',  numContacto:'78945682', fecha:'15-12-2020', fechaFin:'17-12-2020', baseImponible:'700', creador:'Julian', estado:'Activo'},
  {referencia: 'Primer Presupuesto', proveedor: 'TED', ubicacion: 'Av. America',  numContacto:'78945682', fecha:'15-12-2020', fechaFin:'17-12-2020', baseImponible:'700', creador:'Julian', estado:'Activo'},
  {referencia: 'Primer Presupuesto', proveedor: 'TED', ubicacion: 'Av. America',  numContacto:'78945682', fecha:'15-12-2020', fechaFin:'17-12-2020', baseImponible:'700', creador:'Julian', estado:'Activo'},
  {referencia: 'Primer Presupuesto', proveedor: 'TED', ubicacion: 'Av. America',  numContacto:'78945682', fecha:'15-12-2020', fechaFin:'17-12-2020', baseImponible:'700', creador:'Julian', estado:'Activo'},
];

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  displayedColumns: string[] = ['referencia','proveedor','ubicacion','numContacto','fecha', 'fechaFin','baseImponible','creador','estado','acciones'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
