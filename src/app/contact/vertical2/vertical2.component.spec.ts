import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vertical2Component } from './vertical2.component';

describe('Vertical2Component', () => {
  let component: Vertical2Component;
  let fixture: ComponentFixture<Vertical2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vertical2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vertical2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
