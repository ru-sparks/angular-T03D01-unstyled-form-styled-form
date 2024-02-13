import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormData01Component } from './form-data02.component';

describe('FormData01Component', () => {
  let component: FormData01Component;
  let fixture: ComponentFixture<FormData01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormData01Component]
    });
    fixture = TestBed.createComponent(FormData01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
