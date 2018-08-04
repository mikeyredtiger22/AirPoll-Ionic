import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsScreenPage } from './maps-screen.page';

describe('MapsScreenPage', () => {
  let component: MapsScreenPage;
  let fixture: ComponentFixture<MapsScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsScreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
