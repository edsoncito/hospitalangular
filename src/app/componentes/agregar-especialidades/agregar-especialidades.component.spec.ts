import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEspecialidadesComponent } from './agregar-especialidades.component';

describe('AgregarEspecialidadesComponent', () => {
  let component: AgregarEspecialidadesComponent;
  let fixture: ComponentFixture<AgregarEspecialidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEspecialidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEspecialidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
