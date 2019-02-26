import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowDetailsComponent } from './table-row-details.component';

describe('TableRowDetailsComponent', () => {
  let component: TableRowDetailsComponent;
  let fixture: ComponentFixture<TableRowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
