import { Component, OnInit } from '@angular/core';
import { SectionService } from 'src/app/services/section.service';
import { Section } from 'src/app/models/section';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  
  sections: Section[];
  section: Section = new Section();

  redirect: '/sections';

  error:any;

  constructor(private service: SectionService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe(sections => this.sections = sections);
  }

  public eliminar(w: Section): void{
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${w.description} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0A457F',
      cancelButtonColor: '#86b9eb',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.delete(w.idSection).subscribe(() => {
          Swal.fire('Eliminado:', `${w.description} eliminado con éxito`, 'success'); 
        });
        
      }
    });
  }

}
