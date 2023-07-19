import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirchenleitungComponent } from './kirchenleitung.component';

describe('KirchenleitungComponent', () => {
  let component: KirchenleitungComponent;
  let fixture: ComponentFixture<KirchenleitungComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KirchenleitungComponent]
    });
    fixture = TestBed.createComponent(KirchenleitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
