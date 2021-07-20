import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Location } from '@angular/common';
import { RestService } from 'src/app/rest.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-hospitales',
  templateUrl: './agregar-hospitales.component.html',
  styleUrls: ['./agregar-hospitales.component.css'],
  providers: [DatePipe]
})
export class AgregarHospitalesComponent implements OnInit {

  myDate: any = new Date();
  form!: FormGroup;
  public IdHospital: any

  constructor(
    private formBuilder: FormBuilder,
    private _location: Location,
    private RestService: RestService,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) {
    
    this.buildForm();

    this.IdHospital = this.route.snapshot.paramMap.get("key");
    if (this.IdHospital) {
      // console.log("edson")
      this.getById(this.IdHospital)
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
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      create_on: [''],
      update_on: [''],
    })
    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        if (this.IdHospital) {
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
      this.insertarHospital()
    } else {
      alert("Los campo con (*) son obligatorios")
    }
  }

  public insertarHospital() {
    this.RestService.insertarHospital(`http://localhost:8080/api/hospitales`,
      this.form.value
    )
      .subscribe(respuesta => {
        console.log(respuesta)
        alert("Datos guardados Correctamente")
      })
  }

  public getById(id: number) {
    this.RestService.getByIdHospital(`http://localhost:8080/api/hospitales/` + id,
    )
      .subscribe(respuesta => {
        var valor = Object.values(respuesta);

        console.log(valor[4])
        // console.log(this.datePipe.transform(JSON.stringify(valor[4]), 'yyyy-MM-dd'))

        this.form.controls['nombre'].setValue(valor[1]);
        this.form.controls['telefono'].setValue(valor[3]);
        this.form.controls['direccion'].setValue(valor[2]);
        this.form.controls['create_on'].setValue(valor[4]);
      });
  }

  public actualizarHospital() {
    this.RestService.updateHospital(`http://localhost:8080/api/hospitales/` + this.IdHospital,
      this.form.value
    )
      .subscribe(respuesta => {
        console.log(respuesta)
        alert("Datos editados Correctamente")
      })
  }

}