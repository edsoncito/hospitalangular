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


  // ------- Servicios restApi Doctores -----  //

  public getAllDoctor(url: string) {
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

}