import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTecnicoComponent } from './register-tecnico.component';

describe('RegisterTecnicoComponent', () => {
  let component: RegisterTecnicoComponent;
  let fixture: ComponentFixture<RegisterTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
