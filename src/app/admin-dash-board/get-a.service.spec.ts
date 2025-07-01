import { TestBed } from '@angular/core/testing';

import { GetAService } from './get-a.service';

describe('GetAService', () => {
  let service: GetAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
