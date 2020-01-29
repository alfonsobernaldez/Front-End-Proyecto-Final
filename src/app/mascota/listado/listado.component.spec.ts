import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMascotaComponent } from "./listadomascota.component";

describe('ListadoComponent', () => {
  let component: ListadoMascotaComponent;
  let fixture: ComponentFixture<ListadoMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
