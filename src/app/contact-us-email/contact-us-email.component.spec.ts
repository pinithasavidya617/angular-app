import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsEmailComponent } from './contact-us-email.component';

describe('ContactUsEmailComponent', () => {
  let component: ContactUsEmailComponent;
  let fixture: ComponentFixture<ContactUsEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsEmailComponent]
    });
    fixture = TestBed.createComponent(ContactUsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
