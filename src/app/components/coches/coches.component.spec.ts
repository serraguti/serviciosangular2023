import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesComponent } from './coches.component';

describe('CochesComponent', () => {
  let component: CochesComponent;
  let fixture: ComponentFixture<CochesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CochesComponent]
    });
    fixture = TestBed.createComponent(CochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
