import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEspecialidadComponent } from './asignar-especialidad.component';

describe('AsignarEspecialidadComponent', () => {
  let component: AsignarEspecialidadComponent;
  let fixture: ComponentFixture<AsignarEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarEspecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
