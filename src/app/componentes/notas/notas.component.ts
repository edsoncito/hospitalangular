import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Location } from '@angular/common';
import { RestService } from 'src/app/rest.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
  providers: [DatePipe]
})
export class NotasComponent implements OnInit {

  myDate: any = new Date();
  form!: FormGroup;
  public IdPaciente: any
  public listaHospital: any = []
  public listaEspecialidad: any = []

  constructor(
    private formBuilder: FormBuilder,
    private _location: Location,
    private RestService: RestService,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {

    this.IdPaciente = this.route.snapshot.paramMap.get("key");

    this.buildForm();
  }

  ngOnInit(): void {

    this.obtenerHospitales();
    this.obtenerEspecialidades();
  }

  goBack() {
    this._location.back();
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      paciente_id: [this.IdPaciente, [Validators.required]],
      hospital_id: ['', [Validators.required]],
      especialidad_id: ['', [Validators.required]],
      doctor_id: [''],
      create_on: [this.datePipe.transform(this.myDate, 'MM-dd-yyyy')],
      update_on: [''],
    })
    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        console.log(value)
        // if (this.IdPaciente) {
        //   value.update_on = this.datePipe.transform(this.myDate, 'MM-dd-yyyy')
        // } else {
        //   // this.form.addControl('create_on', this.formBuilder.control(this.datePipe.transform(this.myDate, 'MM-dd-yyyy'), Validators.required));
        //   value.create_on = this.datePipe.transform(this.myDate, 'MM-dd-yyyy')
        // }
      });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.insertarNota();
    } else {
      alert("Los campo con (*) son obligatorios")
    }
  }


  public insertarNota() {
    this.RestService.insertarNotas(`http://localhost:8080/api/notas`,
      this.form.value
    )
      .subscribe(respuesta => {
        console.log(respuesta)
        alert("Datos guardados Correctamente")
      })
  }

  public obtenerHospitales() {
    this.RestService.getAllHospital(`http://localhost:8080/api/hospitales`)
      .subscribe(respuesta => {
        this.listaHospital = respuesta
        // console.log(respuesta)
      })
  }

  public obtenerEspecialidades() {
    this.RestService.getAllEspecialidades(`http://localhost:8080/api/especialidades`)
      .subscribe(respuesta => {
        this.listaEspecialidad = respuesta
        // console.log(respuesta)
      })
  }

}
