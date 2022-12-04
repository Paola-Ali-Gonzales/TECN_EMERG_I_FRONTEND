import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rack } from 'src/app/models/rack';
import { RackService } from 'src/app/services/rack.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-racks',
  templateUrl: './racks.component.html',
  styleUrls: ['./racks.component.css']
})
export class RacksComponent implements OnInit {
  racks: Rack[];
  rack: Rack = new Rack();

  redirect: '/rack';

  error:any;

  constructor(private service: RackService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe(racks => this.racks = racks);
  }

  public eliminar(r: Rack): void{
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
        this.service.delete(r.idRack).subscribe(() => {
          Swal.fire('Eliminado:', `${r.description} eliminado con éxito`, 'success');
        });
      }
    });
  }

}
