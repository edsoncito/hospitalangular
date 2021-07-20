import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-historial-notas',
  templateUrl: './historial-notas.component.html',
  styleUrls: ['./historial-notas.component.css']
})
export class HistorialNotasComponent implements OnInit {

  public listaNotas: any = []

  constructor(
    private RestService: RestService
  ) {

  }

  ngOnInit(): void {
    this.obtenerNotas();
  }

  public obtenerNotas() {
    this.RestService.getAllNotas(`http://localhost:8080/api/notas`)
      .subscribe(respuesta => {
        this.listaNotas = respuesta
        console.log(respuesta)
      })
  }
}
