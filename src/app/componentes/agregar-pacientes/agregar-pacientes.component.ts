import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Location } from '@angular/common';
import { RestService } from 'src/app/rest.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-agregar-pacientes',
  templateUrl: './agregar-pacientes.component.html',
  styleUrls: ['./agregar-pacientes.component.css'],
  providers: [DatePipe]
})
export class AgregarPacientesComponent implements OnInit {

  myDate: any = new Date();
  form!: FormGroup;
  public IdPaciente: any

  constructor(
    private formBuilder: FormBuilder,
    private _location: Location,
    private RestService: RestService,
    private datePipe: DatePipe,
    private route: ActivatedRoute

  ) {
    this.buildForm();

    this.IdPaciente = this.route.snapshot.paramMap.get("key");
    if (this.IdPaciente) {
      // console.log("edson")
      this.getById(this.IdPaciente)
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
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      fecha_nac: ['', [Validators.required]],
      create_on: [''],
      update_on: [''],
    })
    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        value.fecha_nac = this.datePipe.transform(value.fecha_nac, 'MM-dd-yyyy')
        if (this.IdPaciente) {
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
      this.insertarPaciente()
    } else {
      alert("Los campo con (*) son obligatorios")
    }
  }

  public insertarPaciente() {
    this.RestService.insertarPaciente(`http://localhost:8080/api/pacientes`,
      this.form.value
    )
      .subscribe(respuesta => {
        console.log(respuesta)
        alert("Datos guardados Correctamente")
      })
  }

  public getById(id: number) {
    this.RestService.getByIdPaciente(`http://localhost:8080/api/pacientes/` + id,
    )
      .subscribe(respuesta => {
        var valor = Object.values(respuesta);

        console.log(valor[6])
        // console.log(this.datePipe.transform(JSON.stringify(valor[4]), 'yyyy-MM-dd'))

        this.form.controls['nombre'].setValue(valor[1]);
        this.form.controls['apellido'].setValue(valor[2]);
        this.form.controls['fecha_nac'].setValue(this.datePipe.transform(JSON.stringify(valor[4]), 'yyyy-MM-dd'));
        this.form.controls['direccion'].setValue(valor[3]);
        this.form.controls['create_on'].setValue(valor[6]);
      });
  }

  public actualizarPaciente() {
    if (this.form.valid) {
      this.RestService.updatePaciente(`http://localhost:8080/api/pacientes/` + this.IdPaciente,
        this.form.value
      )
        .subscribe(respuesta => {
          console.log(respuesta)
          alert("Datos editados Correctamente")
        })
    } else {
      alert("Los campo con (*) son obligatorios")
    }
  }

}
