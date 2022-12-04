import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Cliente } from 'src/app/models/cliente';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import { VentaService } from 'src/app/services/venta.service';
import {Venta} from 'src/app/models/venta'
import {Router} from '@angular/router';
import { DetalleVenta } from 'src/app/models/detalle-venta';
import { ClienteService } from 'src/app/services/cliente.service'

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { ProductService } from 'src/app/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var js;
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})

export class VentasComponent implements OnInit {
  public titulo: string = 'Listado de ventas';
  
  angForm: FormGroup;
  venta : Venta = new Venta();
  products: Producto[] = [];


  constructor(private _snackBar: MatSnackBar, private serviceVenta: VentaService, private serviceProduct: ProductService, private serviceCliente: ClienteService, private _LoadScripts:LoadScriptsService , private router:Router, private fb: FormBuilder) { 
 
    _LoadScripts.Load(["accordion"]);
    this.createForm();
    this.selectProduct();
  }


  myControl = new FormControl<string | Cliente>('');
  filteredOptions: Observable<Cliente[]>;
 
  ngOnInit() {

    this.myControl.valueChanges.subscribe(item =>{
      if(!(item=='') && typeof item === 'string')
      this.filteredOptions = this._filter(item as string);
      if((item != '') && typeof item === 'object')
      {
        this.selectClientVenta(item);
      }
      
      
    });
    
  }

displayFn(user: Cliente): string {
  return user && user.nombre ? user.nombre : '';
}

private _filter(name: string): Observable<Cliente[]> {
  return this.serviceCliente.searchProductCriteria(name);
}
  
  
  createForm() {
    this.angForm = this.fb.group({
      nombre: ["", [Validators.required, ]],
      apellido: ["", [Validators.required, ]],
      nit: ["", [Validators.required, ]],
      correo: ["", [Validators.required, Validators.email]],
      nombreEscogido :[""]
    });
  }


  selectProduct()
  {
    this.serviceProduct.selectClient().subscribe(producto =>{
      this.products = producto;
    });
  }

  addProductVenta(product : Producto)
  {
    let ok = this.venta.detallesVentas.find((item) => item.producto.productID == product.productID);
    if(!ok)
    this.venta.addDetallesVentas(new DetalleVenta(product));
  }

  removeProductVenta(detalleVenta: DetalleVenta)
  {
    this.venta.removeDetalleVenta(detalleVenta);
  }

  public addCountProductVenta(id:number)
  {
    this.venta.addQuantityDetalleVenta(id);
  }

  public removeCountProductVenta(id:number)
  {
    this.venta.removeQauntityDetalleVenta(id);
  }

  public selectClientVenta(cliente : Cliente)
  {
    this.venta.Cliente = cliente;
  }
  
  public RegisterClient(): void{
    if(this.angForm.valid)
    {
      let nombre = this.angForm.controls['nombre'].value;
      let apellido = this.angForm.controls['apellido'].value;
      let nit = this.angForm.controls['nit'].value;
      let correo = this.angForm.controls['correo'].value;
      let cliente  = new Cliente();
      cliente.nitCi = nit;
      cliente.apellidos = apellido;
      cliente.nombre = nombre;
      cliente.correo = correo;
      this.serviceCliente.createCliente(cliente).subscribe(res => {
        this.openSnackBar();
        this.createForm();
      })
    }
    else
    {
      console.log("no esta validado");
    }   
  };

  openSnackBar() {
    this._snackBar.open("Registro Exitoso");
    this._snackBar.dismiss()
  }


  sales()
  {
    if(this.venta.isOk())
    {
      this.serviceVenta.createVenta(this.venta).subscribe(res => {
        console.log("venta correcta")
        this.router.navigate(['ventas'])
      });
    }
  }

   

}
