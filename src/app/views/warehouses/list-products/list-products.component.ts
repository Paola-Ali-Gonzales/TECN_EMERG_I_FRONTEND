import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';
import {Producto} from 'src/app/models/producto';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/producto.service';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rack } from 'src/app/models/rack';
import { RackService } from 'src/app/services/rack.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  productos: Producto[];
  producto: Producto = new Producto();

  racks: Rack[];
  rack: Rack = new Rack();

  error:any;

  constructor( 
    private service: ProductService,
    private services: RackService,
    private router: Router,
    private route: ActivatedRoute) { }

public eliminar(w: Producto): void{
  Swal.fire({
    title: 'Cuidado:',
    text: `¿Seguro que desea eliminar a ${w.name} ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0A457F',
    cancelButtonColor: '#86b9eb',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.value) {
      this.service.delete(w.productID).subscribe(() => {
        Swal.fire('Eliminado:', `${w.name} eliminado con éxito`, 'success');
        this.router.navigate(['/listar_productos']);
        window.location.reload();
      });
    }
  });
}

public eliminarEstante(r: Rack): void{
  Swal.fire({
    title: 'Cuidado:',
    text: `¿Seguro que desea eliminar a ${r.description} ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0A457F',
    cancelButtonColor: '#86b9eb',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.value) {
      this.services.delete(r.idRack).subscribe(() => {
        Swal.fire('Eliminado:', `${r.description} eliminado con éxito`, 'success');
        this.router.navigate(['/listar_productos']);
      });
    }
  });
}
 
  ngOnInit(): void {
    this.service.list().subscribe(productos => this.productos = productos);
    this.services.list().subscribe(racks => this.racks = racks);
  }

}
