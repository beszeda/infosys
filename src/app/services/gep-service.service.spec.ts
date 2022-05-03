import { TestBed } from '@angular/core/testing';

import { GepServiceService } from './gep-service.service';

describe('GepServiceService', () => {
  let service: GepServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GepServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
