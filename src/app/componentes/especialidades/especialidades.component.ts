import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css'],
  providers: [DatePipe]
})

export class EspecialidadesComponent implements OnInit {

  public listaEspecialidades: any = []
  myDate: any = new Date();
  form!: FormGroup;
  public IdEspecialidad: any

  constructor(
    private formBuilder: FormBuilder,
    private RestService: RestService,
    private datePipe: DatePipe,
  ) {
    this.buildForm();
    this.IdEspecialidad = false;
    // if (this.IdEspecialidad) {
    // console.log("edson")
    // this.getById(this.IdEspecialidad)
    // }
  }

  ngOnInit(): void {
    this.obtenerEspecialidades();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      create_on: [''],
      update_on: [''],
    })
    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        if (this.IdEspecialidad) {
          value.update_on = this.datePipe.transform(this.myDate, 'MM-dd-yyyy')
        } else {
          // this.form.addControl('create_on', this.formBuilder.control(this.datePipe.transform(this.myDate, 'MM-dd-yyyy'), Validators.required));
          value.create_on = this.datePipe.transform(this.myDate, 'MM-dd-yyyy')
        }
      });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.insertEspecialidades()
    } else {
      alert("Los campo con (*) son obligatorios")
    }
  }

  public insertEspecialidades() {
    this.RestService.insertarEspecialidades(`http://localhost:8080/api/especialidades`,
      this.form.value
    )
      .subscribe(respuesta => {
        console.log(respuesta)
        alert("Datos guardados Correctamente")
      })
  }

  public obtenerEspecialidades() {
    this.RestService.getAllEspecialidades(`http://localhost:8080/api/especialidades`)
      .subscribe(respuesta => {
        this.listaEspecialidades = respuesta
        // console.log(respuesta)
      })
  }
}
