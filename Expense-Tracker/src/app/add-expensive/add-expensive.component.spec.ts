import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensiveComponent } from './add-expensive.component';

describe('AddExpensiveComponent', () => {
  let component: AddExpensiveComponent;
  let fixture: ComponentFixture<AddExpensiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpensiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
