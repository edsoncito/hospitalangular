import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHospitalesComponent } from './agregar-hospitales.component';

describe('AgregarHospitalesComponent', () => {
  let component: AgregarHospitalesComponent;
  let fixture: ComponentFixture<AgregarHospitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarHospitalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarHospitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
