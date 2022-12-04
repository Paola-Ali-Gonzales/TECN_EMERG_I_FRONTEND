import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import { VentaService } from 'src/app/services/venta.service';
import {Venta} from 'src/app/models/venta'
import {Router} from '@angular/router';
declare var js;

@Component({
  selector: 'app-modulo-ventas',
  templateUrl: './modulo-ventas.component.html',
  styleUrls: ['./modulo-ventas.component.css']
})
export class ModuloVentasComponent implements OnInit {

  public titulo: string = 'Listado de ventas';

  ventas: Venta[];
  datas = [];
  constructor(private service: VentaService, private _LoadScripts:LoadScriptsService, private router:Router ) { 
  
  }

   ngOnInit(): void {
   
    this.service.selectVenta().subscribe(ventas =>{
      this.ventas = ventas;
    })
  }

  public hacerUnaVenta()
  {
    this.router.navigate(['HacerVenta'])
  }


}
