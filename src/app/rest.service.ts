import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }


  // ------- Servicios restApi Pacientes -----  //
  public getAllPaciente(url: string) {
    return this.http.get(url)
  }

  public insertarPaciente(url: string, body: any) {
    return this.http.post(url, body)
  }

  public getByIdPaciente(url: string) {
    return this.http.get(url)
  }

  public updatePaciente(url: string, body: any) {
    return this.http.put(url, body)
  }

  public deletePaciente(url: string) {
    return this.http.delete(url)
  }


  // ------- Servicios restApi Doctores -----  //

  public getAllDoctor(url: string) {
    return this.http.get(url)
  }

  public searchDoctor(url: string) {
    return this.http.get(url)
  }

  public insertarDoctor(url: string, body: any) {
    return this.http.post(url, body)
  }

  public getByIdDoctor(url: string) {
    return this.http.get(url)
  }

  public updateDoctor(url: string, body: any) {
    return this.http.put(url, body)
  }
  public deleteDoctor(url: string) {
    return this.http.delete(url)
  }

  // ------- Servicios restApi Hospitales -----  //

  public getAllHospital(url: string) {
    return this.http.get(url)
  }

  public insertarHospital(url: string, body: any) {
    return this.http.post(url, body)
  }

  public getByIdHospital(url: string) {
    return this.http.get(url)
  }

  public updateHospital(url: string, body: any) {
    return this.http.put(url, body)
  }


  // ------- Servicios restApi Especialidades -----  //

  public getAllEspecialidades(url: string) {
    return this.http.get(url)
  }

  public insertarEspecialidades(url: string, body: any) {
    return this.http.post(url, body)
  }

  public getByIdEspecialidades(url: string) {
    return this.http.get(url)
  }

  public updateEspecialidades(url: string, body: any) {
    return this.http.put(url, body)
  }

  // ------- Servicios restApi Notas -----  //

  public getAllNotas(url: string) {
    return this.http.get(url)
  }

  public insertarNotas(url: string, body: any) {
    return this.http.post(url, body)
  }

  public getByIdNotas(url: string) {
    return this.http.get(url)
  }

  public updateNotas(url: string, body: any) {
    return this.http.put(url, body)
  }

}
