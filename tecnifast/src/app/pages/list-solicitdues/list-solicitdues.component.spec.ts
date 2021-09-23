import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolicitduesComponent } from './list-solicitdues.component';

describe('ListSolicitduesComponent', () => {
  let component: ListSolicitduesComponent;
  let fixture: ComponentFixture<ListSolicitduesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSolicitduesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSolicitduesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
