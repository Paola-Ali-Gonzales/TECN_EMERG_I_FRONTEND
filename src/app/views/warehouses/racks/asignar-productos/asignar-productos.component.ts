import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Rack } from 'src/app/models/rack';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { RackService } from 'src/app/services/rack.service';
import { ProductService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-asignar-productos',
  templateUrl: './asignar-productos.component.html',
  styleUrls: ['./asignar-productos.component.css']
})
export class AsignarProductosComponent implements OnInit {

  rack: Rack;
  productAssing: Producto[] = [];
  products: Producto[] = [];

  tabIndex = 0;

  viewColumns: string[] = ['name','quantity', 'price', 'seleccion'];
  viewColumnsproducts: string[] = ['productID', 'name','quantity', 'price','eliminar'];

  seleccion: SelectionModel<Producto> = new SelectionModel<Producto>(true, []);

  constructor(private route: ActivatedRoute,
    private rackService: RackService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.rackService.ver(id).subscribe(c => {
        this.rack = c;
        this.products = this.rack.products;
      });
    });
  }

  filtrar(term: string): void {
    term = term !== undefined ? term.trim() : '';
    if (term !== '') {
      this.productService.findByNameOrDescription(term)
        .subscribe(products => this.productAssing = products.filter(a => {
          let filtrar = true;
          this.products.forEach(ca => {
            if (a.productID === ca.productID) {
              filtrar = false;
            }
          });
          return filtrar;
        }));
    }
  }

  estanTodosSeleccionados(): boolean {
    const seleccionados = this.seleccion.selected.length;
    const numProducts = this.productAssing.length;
    return (seleccionados === numProducts);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.productAssing.forEach(a => this.seleccion.select(a));
  }

  asignar(): void {
    console.log(this.seleccion.selected);
    this.rackService.addProduct(this.rack, this.seleccion.selected)
      .subscribe(c => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados:',
          `Productos asignados con éxito al ${this.rack.description}`,
          'success'
        );
        this.products = this.products.concat(this.seleccion.selected);
        this.productAssing = [];
        this.seleccion.clear();
      },
        e => {
          if (e.status === 500) {
            const mensaje = e.error.message as string;
            if (mensaje.indexOf('ConstraintViolationException') > -1) {
              Swal.fire(
                'Cuidado:',
                'No se puede asignar la seccion ya está asociado a otro almacen.',
                'error'
              );
            }
          }
        });
  }

  eliminarProducto(producto: Producto): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar ${producto.name} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0A457F',
      cancelButtonColor: '#86b9eb',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.rackService.deleteProduct(this.rack, producto)
        .subscribe(seccion => {
          this.products = this.products.filter(a => a.productID !== seccion.idRack);
          Swal.fire(
            'Eliminado:',
            ` ${producto.name} eliminado con éxito de ${this.rack.description}.`,
            'success'
          );
        });    

      }
    });
  }
}
