import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-especialidades',
  templateUrl: './agregar-especialidades.component.html',
  styleUrls: ['./agregar-especialidades.component.css'],
  providers: [DatePipe]
})
export class AgregarEspecialidadesComponent implements OnInit {

  myDate: any = new Date();
  form!: FormGroup;
  public IdEspecialidad: any

  constructor(
    private formBuilder: FormBuilder,
    private _location: Location,
    private RestService: RestService,  
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {
    this.buildForm();
    this.IdEspecialidad = this.route.snapshot.paramMap.get("key");
    if (this.IdEspecialidad) {
      // console.log("edson")
      // this.getById(this.IdEspecialidad)
    }
  }

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
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


  // public getById(id: number) {
  //   this.RestService.getByIdDoctor(`http://localhost:8080/api/doctores/` + id,
  //   )
  //     .subscribe(respuesta => {
  //       var valor = Object.values(respuesta);

  //       console.log(valor[6])
  //       // console.log(this.datePipe.transform(JSON.stringify(valor[4]), 'yyyy-MM-dd'))
  //       this.form.controls['nombre'].setValue(valor[1]);
  //       this.form.controls['descripcion'].setValue(valor[2]);
  //       this.form.controls['create_on'].setValue(valor[3]);
  //     });
  // }
  

}
