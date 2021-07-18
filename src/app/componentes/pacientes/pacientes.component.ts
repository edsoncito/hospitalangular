import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  constructor(private router: Router) {
  }


  ngOnInit(): void {
  }

  agregarPacientes() {
    this.router.navigate(["/pacientes/agregar-pacientes"])
  }

}
