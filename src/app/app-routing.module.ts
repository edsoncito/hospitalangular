import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { DoctoresComponent } from './componentes/doctores/doctores.component';
import { EspecialidadesComponent } from './componentes/especialidades/especialidades.component';

const routes: Routes = [
  { path: "pacientes", component: PacientesComponent },
  { path: "doctores", component: DoctoresComponent },
  { path: "especialidades", component: EspecialidadesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
