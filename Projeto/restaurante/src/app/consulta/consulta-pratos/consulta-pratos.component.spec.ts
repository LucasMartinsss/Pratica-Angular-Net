import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPratosComponent } from './consulta-pratos.component';

describe('ConsultaPratosComponent', () => {
  let component: ConsultaPratosComponent;
  let fixture: ComponentFixture<ConsultaPratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
