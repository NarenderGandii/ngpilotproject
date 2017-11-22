import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vertical3Component } from './vertical3.component';

describe('Vertical3Component', () => {
  let component: Vertical3Component;
  let fixture: ComponentFixture<Vertical3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vertical3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vertical3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
