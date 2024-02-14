import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDomain1Component } from './table-domain1.component';

describe('TableDomain1Component', () => {
  let component: TableDomain1Component;
  let fixture: ComponentFixture<TableDomain1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDomain1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDomain1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
