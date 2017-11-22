import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vertical1Component } from './vertical1.component';

describe('Vertical1Component', () => {
  let component: Vertical1Component;
  let fixture: ComponentFixture<Vertical1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vertical1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vertical1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
