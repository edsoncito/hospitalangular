import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

  public listaDoctores: any = []
  public message: boolean = false;
  example: boolean = false;
  form!: FormGroup;

  constructor(
    private router: Router,
    private RestService: RestService,
    private formBuilder: FormBuilder,) {

    this.buildForm();
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as { example: boolean };
    if (state) {
      this.message = state.example;
    }
  }

  ngOnInit(): void {
    this.obtenerDoctores();
  }

  onMessage() {

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      search: ['', [Validators.required]],
    })
    this.form.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        if(!this.form.valid){
          this.obtenerDoctores();
        }else{
          this.searchDoctor(this.form.value.search)
        }
       
      });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value.search)
    } else {
      alert("Los campo con (*) son obligatorios")
    }
  }

  navigateCreate() {
    this.router.navigate(["/doctores/agregar-doctores"])
  }

  public obtenerDoctores() {
    this.RestService.getAllDoctor(`http://localhost:8080/api/doctores`)
      .subscribe(respuesta => {
        this.listaDoctores = respuesta
        // console.log(respuesta)
      })
  }


  eliminarDato(id: number) {
    var txt;
    var r = confirm("Seguro que desea eliminar?");
    if (r == true) {
      this.RestService.deleteDoctor(`http://localhost:8080/api/doctores/` + id,
      )
        .subscribe(respuesta => {
          console.log(respuesta)
          this.obtenerDoctores()
        })
    } else {
      txt = "You pressed Cancel!";
    }
  }


  public searchDoctor(text: String) {
    console.log(text)
    this.RestService.searchDoctor(`http://localhost:8080/api/doctores/search/` + text,
    )
      .subscribe(respuesta => {
        this.listaDoctores = respuesta
        console.log(respuesta)
      })
  }

}
