import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Location } from '@angular/common';
import { RestService } from 'src/app/rest.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-doctores',
  templateUrl: './agregar-doctores.component.html',
  styleUrls: ['./agregar-doctores.component.css'],
  providers: [DatePipe]
})
export class AgregarDoctoresComponent implements OnInit {

  
  myDate: any = new Date();
  form!: FormGroup;
  public IdDoctor: any

  constructor(
    private formBuilder: FormBuilder,
    private _location: Location,
    private RestService: RestService,
    private datePipe: DatePipe,
    private route: ActivatedRoute

  ) {
    this.buildForm();

    this.IdDoctor = this.route.snapshot.paramMap.get("key");
    if (this.IdDoctor) {
      // console.log("edson")
      this.getById(this.IdDoctor)
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
      fecha_nac: [''],      
      create_on: [''],      
      update_on: [''],
    })
    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        value.fecha_nac = this.datePipe.transform(value.fecha_nac, 'MM-dd-yyyy')
        if (this.IdDoctor) {
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
      this.insertarDoctor()
    } else {
      alert("Los campo con (*) son obligatorios")
    }
  }

  public insertarDoctor() {
    this.RestService.insertarDoctor(`http://localhost:8080/api/doctores`,
      this.form.value
    )
      .subscribe(respuesta => {
        console.log(respuesta)
        alert("Datos guardados Correctamente")
      })
  }

  public getById(id: number) {
    this.RestService.getByIdDoctor(`http://localhost:8080/api/doctores/` + id,
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

  public actualizarDoctor() {
    this.RestService.updateDoctor(`http://localhost:8080/api/doctores/` + this.IdDoctor,
      this.form.value
    )
      .subscribe(respuesta => {
        console.log(respuesta)
        alert("Datos editados Correctamente")
      })
  }

}
