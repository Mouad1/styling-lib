import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDomainHeaderComponent } from './table-domain-header.component';

describe('TableDomainHeaderComponent', () => {
  let component: TableDomainHeaderComponent;
  let fixture: ComponentFixture<TableDomainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDomainHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDomainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
