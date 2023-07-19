import { TestBed } from '@angular/core/testing';

import { GottesdienstService } from './gottesdienst.service';

describe('GottesdienstService', () => {
  let service: GottesdienstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GottesdienstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
