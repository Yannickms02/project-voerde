import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlaubeComponent } from './glaube.component';

describe('GlaubeComponent', () => {
  let component: GlaubeComponent;
  let fixture: ComponentFixture<GlaubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlaubeComponent]
    });
    fixture = TestBed.createComponent(GlaubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
