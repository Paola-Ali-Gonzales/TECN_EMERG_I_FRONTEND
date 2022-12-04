import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Producto} from 'src/app/models/producto';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  titulo: string;
  producto: Producto;
  redirect: string;

  error:any;

  constructor(private service: ProductService,
              private router: Router,
              private route: ActivatedRoute) {
    
                this.titulo='Nuevo Producto';
                this.producto = new Producto();           
                this.redirect= '/listar_productos';
               }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(w => {
          this.producto = w;
          this.titulo = 'Editar ' + this.producto.name;
        });
      }
    })
  }

  public crear(): void {
    this.service.create(this.producto).subscribe(w => {
      console.log(w);
      Swal.fire('Nuevo:', `${w.name} creado con éxito`, 'success');
      this.router.navigate([this.redirect]);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

  public editar(): void {
    this.service.editProducto(this.producto).subscribe(producto => {
      console.log(producto);
      Swal.fire('Modificado:', `${producto.name} actualizado con éxito`, 'success');
      this.router.navigate([this.redirect]);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }


}
