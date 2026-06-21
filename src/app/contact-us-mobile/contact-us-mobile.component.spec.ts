import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsMobileComponent } from './contact-us-mobile.component';

describe('ContactUsMobileComponent', () => {
  let component: ContactUsMobileComponent;
  let fixture: ComponentFixture<ContactUsMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsMobileComponent]
    });
    fixture = TestBed.createComponent(ContactUsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
