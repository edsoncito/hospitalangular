import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  agregarPacientes() {
    this.router.navigate(["/doctores/agregar-doctores"])
  }

}
