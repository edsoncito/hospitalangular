import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  public listaDoctores:any=[]

  constructor(
    private router: Router,
    private RestService: RestService
  ) {

  }

  ngOnInit(): void {
    this.obtenerDoctores();
  }

  navigateCreate() {
    this.router.navigate(["/doctores/agregar-doctores"])
  }

  public obtenerDoctores() {
    this.RestService.getAllDoctor(`http://localhost:8080/api/doctores`)
      .subscribe(respuesta => {
        this.listaDoctores = respuesta
        // console.log(respuesta)
      })
  }


  eliminarDato(id: number) {
    var txt;
    var r = confirm("Seguro que desea eliminar?");
    if (r == true) {
      this.RestService.deleteDoctor(`http://localhost:8080/api/doctores/` + id,
      )
        .subscribe(respuesta => {
          console.log(respuesta)
          this.obtenerDoctores()
        })
    } else {
      txt = "You pressed Cancel!";
    }
  }

}
