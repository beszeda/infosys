import { TestBed } from '@angular/core/testing';

import { MunkasServiceService } from './munkas-service.service';

describe('MunkasServiceService', () => {
  let service: MunkasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunkasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
