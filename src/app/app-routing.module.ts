import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { DoctoresComponent } from './componentes/doctores/doctores.component';
import { EspecialidadesComponent } from './componentes/especialidades/especialidades.component';
import { HospitalesComponent } from './componentes/hospitales/hospitales.component';
import { AgregarHospitalesComponent } from './componentes/agregar-hospitales/agregar-hospitales.component';
import { AgregarPacientesComponent } from './componentes/agregar-pacientes/agregar-pacientes.component';
import { AgregarDoctoresComponent } from './componentes/agregar-doctores/agregar-doctores.component';
import { HistorialNotasComponent } from './componentes/historial-notas/historial-notas.component';

const routes: Routes = [
  { path: "pacientes", component: PacientesComponent },
  { path: "doctores", component: DoctoresComponent },
  { path: "especialidades", component: EspecialidadesComponent },
  { path: "hospitales", component: HospitalesComponent },
  { path: "hospitales/agregar-hospitales", component: AgregarHospitalesComponent },
  { path: "pacientes/agregar-pacientes", component: AgregarPacientesComponent },
  { path: "pacientes/editar-pacientes/:key", component: AgregarPacientesComponent },
  { path: "doctores/agregar-doctores", component: AgregarDoctoresComponent },
  { path: "historial-notas", component: HistorialNotasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
