import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPratosComponent } from './cadastro-pratos.component';

describe('CadastroPratosComponent', () => {
  let component: CadastroPratosComponent;
  let fixture: ComponentFixture<CadastroPratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
