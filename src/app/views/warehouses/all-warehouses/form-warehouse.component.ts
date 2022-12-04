import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-warehouse',
  templateUrl: './form-warehouse.component.html',
  styleUrls: ['./form-warehouse.component.css']
})
export class FormWarehouseComponent implements OnInit {

  titulo: string;
  warehouse: Warehouse;
  redirect: string;

  error:any;

  constructor(private service: WarehouseService,
              private router: Router,
              private route: ActivatedRoute) {
    
                this.titulo='Nuevo Almacen';
                this.warehouse = new Warehouse();           
                this.redirect= '/warehouse';
               }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(w => {
          this.warehouse = w;
          this.titulo = 'Editar ' + this.warehouse.name;
        });
      }
    })
  }

  public crear(): void {
    this.service.create(this.warehouse).subscribe(w => {
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
    this.service.modify(this.warehouse).subscribe(warehouse => {
      console.log(warehouse);
      Swal.fire('Modificado:', `${warehouse.name} actualizado con éxito`, 'success');
      this.router.navigate([this.redirect]);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }



}
