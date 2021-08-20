import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignar-especialidad',
  templateUrl: './asignar-especialidad.component.html',
  styleUrls: ['./asignar-especialidad.component.css']
})
export class AsignarEspecialidadComponent implements OnInit {

  public listaEspecialidades: any = []
  form!: FormGroup;
  public IdDoctor: any

  constructor(
    private _location: Location,
    private RestService: RestService,
    private route: ActivatedRoute
  ) {
    this.IdDoctor = this.route.snapshot.paramMap.get("key");
    if (this.IdDoctor) {
      // console.log("edson")
      this.obtenerEspecialidades()
    }
  }

  ngOnInit(): void {
  }

  goBack() {
    this._location.back();
  }


  public obtenerEspecialidades() {
    this.RestService.getAllEspecialidades(`http://localhost:8080/api/especialidades`)
      .subscribe(respuesta => {
        this.listaEspecialidades = respuesta
        // console.log(respuesta)
      })
  }

}