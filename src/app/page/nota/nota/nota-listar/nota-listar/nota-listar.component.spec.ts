import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaListarComponent } from './nota-listar.component';

describe('NotaListarComponent', () => {
  let component: NotaListarComponent;
  let fixture: ComponentFixture<NotaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
