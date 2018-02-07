import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRestauranteComponent } from './consulta-restaurante.component';

describe('ConsultaRestauranteComponent', () => {
  let component: ConsultaRestauranteComponent;
  let fixture: ComponentFixture<ConsultaRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
