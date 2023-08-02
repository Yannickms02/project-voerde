import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjekteComponent } from './projekte.component';

describe('ProjekteComponent', () => {
  let component: ProjekteComponent;
  let fixture: ComponentFixture<ProjekteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjekteComponent]
    });
    fixture = TestBed.createComponent(ProjekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
