import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindVisitorComponent } from './find-visitor.component';

describe('FindVisitorComponent', () => {
  let component: FindVisitorComponent;
  let fixture: ComponentFixture<FindVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindVisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
