import { Component, OnInit} from '@angular/core';
import { Rack } from 'src/app/models/rack';
import { Section } from 'src/app/models/section';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { RackService } from 'src/app/services/rack.service';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-assign-racks',
  templateUrl: './assign-racks.component.html',
  styleUrls: ['./assign-racks.component.css']
})
export class AssignRacksComponent implements OnInit {

  section: Section;
  racksAssign: Rack[] = [];
  racks: Rack[] = [];

  tabIndex = 0;

  viewColumns: string[] = ['description', 'seleccion'];
  viewColumnsRacks: string[] = ['idRack', 'description', 'eliminar'];

  seleccion: SelectionModel<Rack> = new SelectionModel<Rack>(true, []);

  constructor(private route: ActivatedRoute,
    private sectionService: SectionService,
    private rackService: RackService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.sectionService.ver(id).subscribe(c => {
        this.section = c;
        this.racks = this.section.racks;
      });
    });
  }

  filtrar(description: string): void {
    description = description !== undefined ? description.trim() : '';
    if (description !== '') {
      this.rackService.findByDescription(description)
        .subscribe(racks => this.racksAssign = racks.filter(a => {
          let filtrar = true;
          this.racks.forEach(ca => {
            if (a.idRack === ca.idRack) {
              filtrar = false;
            }
          });
          return filtrar;
        }));
    }
  }

  estanTodosSeleccionados(): boolean {
    const seleccionados = this.seleccion.selected.length;
    const numRacks = this.racksAssign.length;
    return (seleccionados === numRacks);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.racksAssign.forEach(a => this.seleccion.select(a));
  }

  asignar(): void {
    console.log(this.seleccion.selected);
    this.sectionService.addRack(this.section, this.seleccion.selected)
      .subscribe(c => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados:',
          `Estantes asignados con éxito a la sección ${this.section.description}`,
          'success'
        );
        this.racks = this.racks.concat(this.seleccion.selected);
        this.racksAssign = [];
        this.seleccion.clear();
      },
        e => {
          if (e.status === 500) {
            const mensaje = e.error.message as string;
            if (mensaje.indexOf('ConstraintViolationException') > -1) {
              Swal.fire(
                'Cuidado:',
                'No se puede asignar, el estante ya está asociado a otra sección.',
                'error'
              );
            }
          }
        });
  }

  eliminarRack(estante: Rack): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar ${estante.description} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0A457F',
      cancelButtonColor: '#86b9eb',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.sectionService.deleteRack(this.section, estante)
        .subscribe(estante => {
          this.racks = this.racks.filter(a => a.idRack !== estante.idSection);
          Swal.fire(
            'Eliminado:',
            `Seccion ${estante.description} eliminado con éxito del almacen ${this.section.description}.`,
            'success'
          );
        });    

      }
    });
  }

}
