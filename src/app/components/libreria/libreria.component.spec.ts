import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaComponent } from './libreria.component';

describe('LibreriaComponent', () => {
  let component: LibreriaComponent;
  let fixture: ComponentFixture<LibreriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibreriaComponent]
    });
    fixture = TestBed.createComponent(LibreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
