import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rack } from 'src/app/models/rack';
import { RackService } from 'src/app/services/rack.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-rack',
  templateUrl: './form-rack.component.html',
  styleUrls: ['./form-rack.component.css']
})
export class FormRackComponent implements OnInit {

  titulo: string;
  rack: Rack;
  redirect: string;

  error:any;

  constructor(private service: RackService,
              private router: Router,
              private route: ActivatedRoute) {
    
                this.titulo='Nuevo Estante';
                this.rack = new Rack();           
                this.redirect= '/listar_productos';
               }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(w => {
          this.rack = w;
          this.titulo = 'Editar ' + this.rack.description;
        });
      }
    })
  }

  public crear(): void {
    this.service.create(this.rack).subscribe(w => {
      console.log(w);
      Swal.fire('Nuevo:', `${w.description} creado con éxito`, 'success');
      this.router.navigate([this.redirect]);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

  public editar(): void {
    this.service.modify(this.rack).subscribe(rack => {
      console.log(rack);
      Swal.fire('Modificado:', `${rack.description} actualizado con éxito`, 'success');
      this.router.navigate([this.redirect]);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}
