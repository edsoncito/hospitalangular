import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  public listaHospitales: any = []

  constructor(
    private router: Router,
    private RestService: RestService
  ) {

  }

  ngOnInit(): void {
    this.obtenerHospitales();
  }

  agregarHospitales() {
    this.router.navigate(["/hospitales/agregar-hospitales"])
  }

  public obtenerHospitales() {
    this.RestService.getAllHospital(`http://localhost:8080/api/hospitales`)
      .subscribe(respuesta => {
        this.listaHospitales = respuesta
        // console.log(respuesta)
      })
  }

}




