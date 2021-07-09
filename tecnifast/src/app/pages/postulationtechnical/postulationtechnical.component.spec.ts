import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulationtechnicalComponent } from './postulationtechnical.component';

describe('PostulationtechnicalComponent', () => {
  let component: PostulationtechnicalComponent;
  let fixture: ComponentFixture<PostulationtechnicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulationtechnicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulationtechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
