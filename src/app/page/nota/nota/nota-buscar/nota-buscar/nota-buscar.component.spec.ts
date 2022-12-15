import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaBuscarComponent } from './nota-buscar.component';

describe('NotaBuscarComponent', () => {
  let component: NotaBuscarComponent;
  let fixture: ComponentFixture<NotaBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaBuscarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
