import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  agregarHospitales() {
    this.router.navigate(["/hospitales/agregar-hospitales"])
  }

}
