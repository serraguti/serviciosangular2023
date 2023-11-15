import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasapiComponent } from './personasapi.component';

describe('PersonasapiComponent', () => {
  let component: PersonasapiComponent;
  let fixture: ComponentFixture<PersonasapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonasapiComponent]
    });
    fixture = TestBed.createComponent(PersonasapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
