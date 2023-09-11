import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLoginFormComponent } from './google-login-form.component';

describe('GoogleLoginFormComponent', () => {
  let component: GoogleLoginFormComponent;
  let fixture: ComponentFixture<GoogleLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
