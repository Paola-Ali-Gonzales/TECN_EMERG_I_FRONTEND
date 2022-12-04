import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Warehouse } from 'src/app/models/warehouse';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-warehouses',
  templateUrl: './all-warehouses.component.html',
  styleUrls: ['./all-warehouses.component.css']
})
export class AllWarehousesComponent implements OnInit {
  
  warehouses: Warehouse[];
  warehouse: Warehouse = new Warehouse();

  redirect: '/warehouse';

  error:any;

  constructor(private service: WarehouseService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe(warehouses => this.warehouses = warehouses);
  }

  public eliminar(w: Warehouse): void{
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
        this.service.delete(w.idWarehouse).subscribe(() => {
          Swal.fire('Eliminado:', `${w.name} eliminado con éxito`, 'success');
        });
      }
    });
  }

}
