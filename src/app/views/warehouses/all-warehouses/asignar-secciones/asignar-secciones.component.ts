import { Component, OnInit} from '@angular/core';
import { Warehouse } from 'src/app/models/warehouse';
import { Section } from 'src/app/models/section';
import { SelectionModel } from '@angular/cdk/collections';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-asignar-secciones',
  templateUrl: './asignar-secciones.component.html',
  styleUrls: ['./asignar-secciones.component.css']
})
export class AsignarSeccionesComponent implements OnInit {

  warehouse: Warehouse;
  sectionsAssing: Section[] = [];
  sections: Section[] = [];

  tabIndex = 0;

  viewColumns: string[] = ['description', 'seleccion'];
  viewColumnsSections: string[] = ['idSection', 'description', 'eliminar'];

  seleccion: SelectionModel<Section> = new SelectionModel<Section>(true, []);

  constructor(private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private sectionService: SectionService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      this.warehouseService.ver(id).subscribe(c => {
        this.warehouse = c;
        this.sections = this.warehouse.sections;
      });
    });
  }

  filtrar(description: string): void {
    description = description !== undefined ? description.trim() : '';
    if (description !== '') {
      this.sectionService.findByDescription(description)
        .subscribe(sections => this.sectionsAssing = sections.filter(a => {
          let filtrar = true;
          this.sections.forEach(ca => {
            if (a.idSection === ca.idSection) {
              filtrar = false;
            }
          });
          return filtrar;
        }));
    }
  }

  estanTodosSeleccionados(): boolean {
    const seleccionados = this.seleccion.selected.length;
    const numSections = this.sectionsAssing.length;
    return (seleccionados === numSections);
  }

  seleccionarDesSeleccionarTodos(): void {
    this.estanTodosSeleccionados() ?
      this.seleccion.clear() :
      this.sectionsAssing.forEach(a => this.seleccion.select(a));
  }

  asignar(): void {
    console.log(this.seleccion.selected);
    this.warehouseService.addSection(this.warehouse, this.seleccion.selected)
      .subscribe(c => {
        this.tabIndex = 2;
        Swal.fire(
          'Asignados:',
          `Secciones asignadas con éxito a almacen ${this.warehouse.name}`,
          'success'
        );
        this.sections = this.sections.concat(this.seleccion.selected);
        this.sectionsAssing = [];
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

  eliminarSeccion(seccion: Section): void {
    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar ${seccion.description} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0A457F',
      cancelButtonColor: '#86b9eb',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {

        this.warehouseService.deleteSection(this.warehouse, seccion)
        .subscribe(seccion => {
          this.sections = this.sections.filter(a => a.idSection !== seccion.idWarehouse);
          Swal.fire(
            'Eliminado:',
            `Seccion ${seccion.name} eliminado con éxito del almacen ${this.warehouse.name}.`,
            'success'
          );
        });    

      }
    });
  }

}
