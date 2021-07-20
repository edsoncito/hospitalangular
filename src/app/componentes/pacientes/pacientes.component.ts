import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {


  public listaPaciente: any = []

  constructor(
    private router: Router,
    private RestService: RestService
  ) {

  }

  ngOnInit(): void {
    this.obtenerPaciente();
  }

  agregarPacientes() {
    this.router.navigate(["/pacientes/agregar-pacientes"])
  }

  public obtenerPaciente() {
    console.log("entroo")
    this.RestService.getAllPaciente(`http://localhost:8080/api/pacientes`)
      .subscribe(respuesta => {
        this.listaPaciente = respuesta
        // console.log(respuesta)
      })
  }

  eliminarDato(id: number) {
    var txt;
    var r = confirm("Seguro que desea eliminar?");
    if (r == true) {
      this.RestService.deletePaciente(`http://localhost:8080/api/pacientes/` + id,
      )
        .subscribe(respuesta => {
          console.log(respuesta)
          this.obtenerPaciente()
        })
    } else {
      txt = "You pressed Cancel!";
    }
  }
}

