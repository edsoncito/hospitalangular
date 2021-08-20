import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './componentes/hola-mundo/hola-mundo.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PacientesComponent } from './componentes/pacientes/pacientes.component';
import { DoctoresComponent } from './componentes/doctores/doctores.component';
import { EspecialidadesComponent } from './componentes/especialidades/especialidades.component';
import { HospitalesComponent } from './componentes/hospitales/hospitales.component';
import { AgregarHospitalesComponent } from './componentes/agregar-hospitales/agregar-hospitales.component';
import { AgregarPacientesComponent } from './componentes/agregar-pacientes/agregar-pacientes.component';
import { AgregarDoctoresComponent } from './componentes/agregar-doctores/agregar-doctores.component';
import { HistorialNotasComponent } from './componentes/historial-notas/historial-notas.component';
import { NotasComponent } from './componentes/notas/notas.component';
import { AgregarEspecialidadesComponent } from './componentes/agregar-especialidades/agregar-especialidades.component';
import { AsignarEspecialidadComponent } from './componentes/asignar-especialidad/asignar-especialidad.component';



@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    SidebarComponent,
    NavbarComponent,
    PacientesComponent,
    DoctoresComponent,
    EspecialidadesComponent,
    HospitalesComponent,
    AgregarHospitalesComponent,
    AgregarPacientesComponent,
    AgregarDoctoresComponent,
    HistorialNotasComponent,
    NotasComponent,
    AgregarEspecialidadesComponent,
    AsignarEspecialidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
