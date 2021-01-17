import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HieraquiaContratoComponent } from './hieraquia-contrato.component';

describe('HieraquiaContratoComponent', () => {
  let component: HieraquiaContratoComponent;
  let fixture: ComponentFixture<HieraquiaContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HieraquiaContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HieraquiaContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
