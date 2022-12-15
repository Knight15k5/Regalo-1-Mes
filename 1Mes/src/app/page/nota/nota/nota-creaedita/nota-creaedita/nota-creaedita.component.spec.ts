import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaCreaeditaComponent } from './nota-creaedita.component';

describe('NotaCreaeditaComponent', () => {
  let component: NotaCreaeditaComponent;
  let fixture: ComponentFixture<NotaCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
