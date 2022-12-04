import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { Section } from 'src/app/models/section';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent implements OnInit {

  titulo: string;
  section: Section;
  redirect: string;

  error:any;

  constructor(private service: SectionService,
              private router: Router,
              private route: ActivatedRoute) {
    
                this.titulo='Nueva Sección';
                this.section = new Section();           
                this.redirect= '/section';
               }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if(id){
        this.service.ver(id).subscribe(w => {
          this.section = w;
          this.titulo = 'Editar ' + this.section.description;
        });
      }
    })
  }

  public crear(): void {
    this.service.create(this.section).subscribe(w => {
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
    this.service.modify(this.section).subscribe(section => {
      console.log(section);
      Swal.fire('Modificado:', `${section.description} actualizado con éxito`, 'success');
      this.router.navigate([this.redirect]);
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }



}
